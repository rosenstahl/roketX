# 🚀 NETCUP MANUELLER DEPLOYMENT GUIDE

## ⚠️ KRITISCH: Alle Schritte sind MANUELL bei Netcup!

### 🔧 GEFIXTE PROBLEME:
1. ❌ **VITE Environment Vars** → ✅ **Node.js ENV Vars**
2. ❌ **Postinstall Scripts** → ✅ **Manuelle Setup Scripts**  
3. ❌ **Hardcoded CORS** → ✅ **Environment-basierte CORS**
4. ❌ **Automatisierung** → ✅ **Manueller Plesk-Workflow**

## 📋 SCHRITT-FÜR-SCHRITT ANLEITUNG

### 1. PLESK PANEL SETUP (EXAKT SO!)
- **Application Root**: `/httpdocs/roketx.de`
- **Document Root**: `/httpdocs/roketx.de`
- **Startup File**: `server.js`
- **Node.js Version**: `21.x`
- **Application Mode**: `production`

### 2. ENVIRONMENT SETUP (WICHTIG!)
Die .env Dateien haben **LEERZEICHEN** im Namen:
- `.env.development ` (mit Leerzeichen am Ende!)
- `.env.production  ` (mit zwei Leerzeichen am Ende!)

**Inhalt .env.production  :**
```env
# .env.production - Netcup Production
NODE_ENV=production
PORT=3000
API_URL=https://roketx.de
EMAIL_SERVICE=https://formsubmit.co/el/secure/info@roketx.de
GOOGLE_ANALYTICS_ID=G-Q1RH9QSYP0
CALENDLY_URL=https://calendly.com/hasanyilmaz1811/roketx
CORS_ORIGIN=https://roketx.de,https://www.roketx.de
```

### 3. MANUELLER DEPLOYMENT PROZESS

#### Schritt 1: NPM Install
1. **Plesk Panel** → **Node.js** → **"NPM Install"**
2. ⏱️ **Warten: 5-20 Minuten** (je nach Server-Last)
3. ✅ **Erfolgreich wenn**: "Installation completed" angezeigt wird

#### Schritt 2: Build Process  
1. **Plesk Panel** → **Node.js** → **"Run Script"**
2. **Script auswählen**: `build:netcup`
3. ⏱️ **Warten: 5-15 Minuten** (Webpack Build läuft)
4. ✅ **Erfolgreich wenn**: `dist/` Ordner erstellt wurde

#### Schritt 3: App Restart
1. **Plesk Panel** → **Node.js** → **"Restart App"**
2. ⏱️ **Warten: 2-3 Minuten** bis Status "Running" 
3. ✅ **Erfolgreich wenn**: Server Logs zeigen "🚀 RoketX Server starting..."

### 4. TROUBLESHOOTING

#### Weiße Seite im Browser:
```bash
# In Plesk Server Logs schauen nach:
"❌ DIST MISSING: Run build first!"
# → Build Script nochmal ausführen
```

#### Font 500 Errors:
```bash
# Fonts Symlink fehlt - Post-build Script lief nicht
# → Build Script komplett wiederholen  
```

#### CORS Errors:
```bash
# .env.production   Datei prüfen
# CORS_ORIGIN Variable korrekt gesetzt?
```

### 5. ERFOLGS-INDIKATOREN

#### ✅ Successful Deployment:
- **Server Logs**: "🚀 RoketX Server starting..."
- **Server Logs**: "📁 Document Root: /var/www/vhosts/..."
- **Server Logs**: "🔒 CORS Origins: https://roketx.de,https://www.roketx.de"
- **Browser**: React App lädt (nicht weiß)
- **Browser Console**: Keine 500 Font Errors
- **Browser Console**: Keine CORS Errors

#### ❌ Failed Deployment:
- **Server Logs**: "❌ DIST MISSING: Run build first!"
- **Browser**: Weiße Seite oder Error Message
- **Browser Console**: `GET /fonts/... 500 (Internal Server Error)`
- **Browser Console**: `CORS policy: No 'Access-Control-Allow-Origin'`

### 6. FILE STRUCTURE NACH DEPLOYMENT
```
/httpdocs/roketx.de/
├── server.js                     # ← ENTRY POINT
├── package.json                  # ← Scripts & Dependencies  
├── .env.production               # ← Environment (MIT LEERZEICHEN!)
├── dist/                         # ← Build Output (MANUELL erstellt)
│   ├── index.html               # ← React App HTML  
│   ├── assets/                  # ← Webpack Bundles
│   │   ├── css/                # ← CSS Files
│   │   ├── js/                 # ← JavaScript Bundles  
│   │   └── .OTF/               # ← Font Files
│   ├── fonts/ → assets/.OTF     # ← Symlink (AUTO-ERSTELLT)
│   ├── manifest.json            # ← PWA Manifest
│   ├── favicon.ico              # ← Favicon
│   └── images/                  # ← Static Images
├── scripts/                      # ← Helper Scripts
│   ├── post-build.js            # ← Post-Build Automation
│   └── setup-netcup.js          # ← Setup Helper
├── src/                          # ← React Source (nicht deployed)
└── public/                       # ← Static Source (nicht deployed)
```

### 7. EMERGENCY RECOVERY

#### Falls alles schief geht:
1. **Plesk Panel** → **Node.js** → **"Stop App"**
2. Alle Dateien außer `node_modules/` löschen  
3. Fresh Git Clone der Repository
4. Von vorne mit NPM Install beginnen

#### Debug Commands (falls SSH verfügbar):
```bash
# Directory content check
ls -la /httpdocs/roketx.de/

# Dist folder check  
ls -la /httpdocs/roketx.de/dist/

# Environment check
cat /httpdocs/roketx.de/.env.production*

# Server process check
ps aux | grep node
```

**Last Updated:** ${new Date().toISOString()}
**Status:** Ready for Manual Netcup Deployment