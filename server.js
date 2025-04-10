const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Statische Dateien aus dem dist-Verzeichnis ausliefern
app.use(express.static(path.join(__dirname, 'dist')));

// Für alle Anfragen, die nicht auf Dateien treffen, index.html zurückgeben
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
