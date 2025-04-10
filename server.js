const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Verzeichnis für statische Dateien
const distDir = path.join(__dirname, 'dist');
const publicDir = path.join(__dirname, 'public');

// Überprüfen, ob das Verzeichnis existiert
const useDistDir = fs.existsSync(distDir);

// Statische Dateien aus dem korrekten Verzeichnis ausliefern
if (useDistDir) {
  console.log('Verwende dist-Verzeichnis für statische Dateien');
  app.use(express.static(distDir));
} else {
  console.log('Dist-Verzeichnis nicht gefunden, verwende public-Verzeichnis');
  app.use(express.static(publicDir));
}

// Statusendpunkt
app.get('/status', (req, res) => {
  res.sendFile(path.join(publicDir, 'status.html'));
});

// Für alle anderen Anfragen
app.get('*', (req, res) => {
  if (useDistDir) {
    res.sendFile(path.join(distDir, 'index.html'));
  } else {
    // Wenn kein dist-Verzeichnis vorhanden ist, zeigen wir die Status-Seite an
    res.sendFile(path.join(publicDir, 'status.html'));
  }
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
  console.log(`Server gestartet: ${new Date().toISOString()}`);
  console.log(`Umgebung: ${process.env.NODE_ENV || 'development'}`);
});
