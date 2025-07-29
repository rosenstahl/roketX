// server.netcup.js - Optimized RoketX Server for Netcup Hosting
import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// ES Module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// NETCUP-SPECIFIC: Ensure proper startup
console.log('🚀 RoketX Server starting...');
console.log('📁 Document Root:', __dirname);
console.log('🔧 Environment:', process.env.NODE_ENV || 'production');
console.log('🌐 Port:', PORT);

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// CORS Configuration - Environment based
const corsOrigins = process.env.CORS_ORIGIN 
  ? process.env.CORS_ORIGIN.split(',')
  : ['https://roketx.de', 'https://www.roketx.de'];

const corsOptions = {
  origin: corsOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

console.log('🔒 CORS Origins:', corsOrigins);

app.use(cors(corsOptions));

// Enhanced security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production',
    version: '1.0.0'
  });
});

// Contact Form API - Simplified version
app.post('/api/contact', async (req, res) => {
  const requestId = Date.now().toString(36) + Math.random().toString(36).substr(2);
  
  try {
    const { name, email, message, package: selectedPackage, phone, company } = req.body;

    // Basic validation
    if (!name || name.length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Name muss mindestens 2 Zeichen lang sein'
      });
    }
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Gültige E-Mail-Adresse erforderlich'
      });
    }
    
    if (!message || message.length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Nachricht muss mindestens 10 Zeichen lang sein'
      });
    }

    // Simple rate limiting
    const clientId = req.ip;
    if (!global.rateLimitStore) global.rateLimitStore = new Map();
    
    const now = Date.now();
    const clientRequests = global.rateLimitStore.get(clientId) || [];
    const recentRequests = clientRequests.filter(time => now - time < 300000); // 5 min
    
    if (recentRequests.length >= 3) {
      return res.status(429).json({
        success: false,
        error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.'
      });
    }
    
    recentRequests.push(now);
    global.rateLimitStore.set(clientId, recentRequests);

    // Prepare email payload
    const subject = selectedPackage 
      ? `Neue Paket-Anfrage: ${selectedPackage}`
      : 'Neue Kontaktanfrage über Website';

    const emailPayload = {
      name,
      email,
      message,
      ...(phone && { phone }),
      ...(company && { company }),
      ...(selectedPackage && { package: selectedPackage }),
      _subject: subject,
      _template: 'table',
      _captcha: false,
      _replyto: email,
      timestamp: new Date().toISOString(),
      requestId
    };

    // Send to FormSubmit.co
    const emailServiceUrl = process.env.EMAIL_SERVICE_URL || 'https://formsubmit.co/ajax/info@roketx.de';
    
    const response = await fetch(emailServiceUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    });

    if (!response.ok) {
      throw new Error(`Email service error: ${response.status}`);
    }

    console.log(`Contact form submitted: ${requestId} - ${name} (${email})`);

    res.json({
      success: true,
      message: 'Ihre Nachricht wurde erfolgreich gesendet! Wir melden uns bald bei Ihnen.',
      data: {
        id: requestId,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Contact form error:', error.message);
    
    res.status(500).json({
      success: false,
      error: 'Ein technischer Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
      requestId
    });
  }
});

// Package Information API
app.get('/api/packages', (req, res) => {
  const packages = [
    {
      id: 'startup',
      title: 'Startup All-in-One',
      idealFor: 'Ideal für Neugründungen und Entrepreneure',
      isPopular: true,
      features: [
        'Website-Entwicklung',
        'Branding & Logo',
        'Social Media Setup',
        'SEO Grundlagen'
      ]
    },
    {
      id: 'digital',
      title: 'Digital Transform',
      idealFor: 'Ideal für etablierte, aber analog arbeitende Unternehmen',
      isPopular: false,
      features: [
        'Digitalisierung bestehender Prozesse',
        'E-Commerce Integration',
        'CRM-System',
        'Automatisierung'
      ]
    },
    {
      id: 'makeover',
      title: 'Brand Makeover',
      idealFor: 'Ideal für Unternehmen in der Umbruchphase',
      isPopular: false,
      features: [
        'Komplettes Rebranding',
        'Website Redesign',
        'Marketing-Strategie',
        'Content-Erstellung'
      ]
    },
    {
      id: 'growth',
      title: 'Growth Paket',
      idealFor: 'Ideal für wachstumsorientierte Firmen',
      isPopular: false,
      features: [
        'Performance Marketing',
        'Analytics & Tracking',
        'A/B Testing',
        'Conversion-Optimierung'
      ]
    }
  ];

  res.json({
    success: true,
    data: packages
  });
});

// Analytics API - Simplified
app.post('/api/analytics/event', (req, res) => {
  try {
    const { event, data } = req.body;
    console.log('Analytics:', event, data);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

// Special routes for PWA files (BEFORE static middleware)
app.get('/manifest.json', (req, res) => {
  res.setHeader('Content-Type', 'application/manifest+json');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.sendFile(path.join(__dirname, 'dist', 'manifest.json'));
});

app.get('/manifest.webmanifest', (req, res) => {
  res.setHeader('Content-Type', 'application/manifest+json');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.sendFile(path.join(__dirname, 'dist', 'manifest.webmanifest'));
});

app.get('/sw.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Cache-Control', 'no-cache');
  res.sendFile(path.join(__dirname, 'dist', 'sw.js'));
});

// Configure MIME types for fonts and assets
const mime = {
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject',
  '.svg': 'image/svg+xml',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.jsx': 'application/javascript', // Fix JSX MIME type
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.webmanifest': 'application/manifest+json'
};

// Serve static files with proper headers
app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    
    // Set MIME type
    if (mime[ext]) {
      res.setHeader('Content-Type', mime[ext]);
    }
    
    // Cache headers for fonts and images
    if (['.woff', '.woff2', '.ttf', '.otf', '.eot'].includes(ext)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
      res.setHeader('Access-Control-Allow-Origin', '*');
    } else if (['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'].includes(ext)) {
      res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day
    } else if (['.css', '.js'].includes(ext)) {
      res.setHeader('Cache-Control', 'public, max-age=3600'); // 1 hour
    }
  },
  index: false // Don't serve index.html automatically
}));

// Serve fonts specifically with CORS headers
app.use('/fonts', express.static(path.join(__dirname, 'dist/fonts'), {
  setHeaders: (res, filePath) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.otf' || ext === '.ttf') {
      res.setHeader('Content-Type', 'font/otf');
    } else if (ext === '.woff') {
      res.setHeader('Content-Type', 'font/woff');
    } else if (ext === '.woff2') {
      res.setHeader('Content-Type', 'font/woff2');
    }
  }
}));

// NETCUP MANUAL MODE: Serve React app for all routes
app.get('*', (req, res) => {
  // Skip API routes
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ 
      success: false, 
      error: 'API endpoint not found' 
    });
  }
  
  // Skip file requests (let express.static handle them)
  if (req.path.includes('.')) {
    return res.status(404).send('File not found');
  }
  
  // Serve React app
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  
  // MANUAL CHECK: Does dist/index.html exist?
  if (!require('fs').existsSync(indexPath)) {
    console.error('❌ DIST MISSING: Run build first!');
    return res.status(500).send(`
      <h1>🔧 Build Required</h1>
      <p>dist/index.html not found!</p>
      <p><strong>Manual Steps:</strong></p>
      <ol>
        <li>Plesk Panel → Node.js → Run Script "build"</li>
        <li>Restart this app</li>
      </ol>
    `);
  }
  
  // Inject environment variables as window globals
  require('fs').readFile(indexPath, 'utf8', (err, html) => {
    if (err) {
      return res.status(500).send('Error reading index.html');
    }
    
    // Inject environment variables as window globals BEFORE any scripts
    const envScript = `
      <script>
        window.__API_URL__ = '${process.env.API_URL || ''}';
        window.__GOOGLE_ANALYTICS_ID__ = '${process.env.GOOGLE_ANALYTICS_ID || 'G-Q1RH9QSYP0'}';
        window.__EMAIL_SERVICE__ = '${process.env.EMAIL_SERVICE || ''}';
        window.__NODE_ENV__ = '${process.env.NODE_ENV || 'production'}';
      </script>
    `;
    
    // Inject before closing </head> tag
    const modifiedHtml = html.replace('</head>', `${envScript}</head>`);
    
    res.setHeader('Content-Type', 'text/html');
    res.send(modifiedHtml);
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  if (!res.headersSent) {
    res.status(500).json({
      success: false,
      error: 'Ein interner Serverfehler ist aufgetreten'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 RoketX Server läuft auf Port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'production'}`);
  console.log(`📁 Static files: dist/`);
  console.log(`🔗 API verfügbar unter: /api/health, /api/contact, /api/packages`);
});

export default app;