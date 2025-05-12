// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';
import helmet from 'helmet';

// ES Module Kompatibilität
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Gzip-Kompression aktivieren
app.use(compression());

// Sicherheitsheader setzen (ähnlich wie in der NGINX-Konfiguration)
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", "https:", "data:", "'unsafe-inline'", "'unsafe-eval'"],
        imgSrc: ["'self'", "data:", "https:"],
        fontSrc: ["'self'", "data:", "https:"],
      },
    },
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
    hsts: { maxAge: 31536000, includeSubDomains: true },
  })
);

// Cache-Header für statische Dateien
const setCustomCacheControl = (res, path) => {
  // JS und CSS-Dateien: 1 Jahr Cache
  if (path.endsWith('.js') || path.endsWith('.css')) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
  // Bilder und Schriften: 1 Jahr Cache
  else if (
    path.endsWith('.jpg') || path.endsWith('.jpeg') || path.endsWith('.png') ||
    path.endsWith('.gif') || path.endsWith('.ico') || path.endsWith('.svg') ||
    path.endsWith('.webp') || path.endsWith('.woff') || path.endsWith('.woff2') ||
    path.endsWith('.ttf') || path.endsWith('.eot')
  ) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // HTML: kurzer Cache
  else if (path.endsWith('.html')) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
  }
};

// Statische Dateien bereitstellen, nach dem Build aus dem dist-Verzeichnis
app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: setCustomCacheControl
}));

// API Rate Limiting könnte hier hinzugefügt werden, wenn benötigt
// (mit express-rate-limit)

// Alle Anfragen auf index.html umleiten (für SPA-Routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
