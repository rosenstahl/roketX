# RoketX Website

Website für die Firma RoketX - Digital Marketing & Web Development.

## Deployment-Anleitung mit Node.js

Diese Website wurde mit React/Vite gebaut und wird über einen Node.js-Express-Server ausgeliefert.

### Einrichtung im Webhosting

1. **FTP-Upload:**
   - Die Website wird automatisch via GitHub Actions gebaut und zum Server hochgeladen
   - Alternativ können die Dateien manuell hochgeladen werden

2. **Node.js aktivieren:**
   - Im Webhosting Control Panel zu "Node.js in roketx.de" navigieren
   - "Node.js aktivieren" klicken
   - Als Startdatei "app.js" festlegen

3. **NPM-Abhängigkeiten installieren:**
   - Im Node.js-Bereich des Control Panels "NPM Install" ausführen
   - Alternativ über SSH-Zugriff:
     ```
     cd /pfad/zu/roketx.de
     npm install
     ```

4. **Node.js-Server starten:**
   - Im Control Panel "Node.js-Befehle ausführen" klicken und den Server starten
   - Alternativ über SSH:
     ```
     npm start
     ```

### Fallback-Option

Falls Node.js nicht verfügbar ist, kann die Website auch über reguläres statisches Webhosting mit der .htaccess-Datei für SPA-Routing ausgeliefert werden.

## Entwicklung

Für lokale Entwicklung:

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Für Produktion bauen
npm run build

# Build lokal testen
npm run preview
```

## Server-Status

Die Website bietet einen einfachen Statusendpunkt unter `/status`, der eine Statusseite anzeigt.
