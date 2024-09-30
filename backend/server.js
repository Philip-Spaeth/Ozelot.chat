// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB, sequelize } = require('./config/db');

// Umgebungsvariablen laden
dotenv.config();

// Datenbank verbinden
connectDB();

// Modelle importieren
require('./models/Entry');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routen
app.use('/api/entries', require('./routes/entryRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server läuft auf Port ${PORT}`);
  try {
    await sequelize.sync();
    console.log('Datenbank synchronisiert.');
  } catch (error) {
    console.error('Fehler beim Synchronisieren der Datenbank:', error);
  }
});
