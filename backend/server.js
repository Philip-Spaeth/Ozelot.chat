// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Umgebungsvariablen laden
dotenv.config();
console.log('JWT_SECRET:', process.env.JWT_SECRET);

const { connectDB, sequelize } = require('./config/db');

// Datenbank verbinden
connectDB();

// Modelle importieren
require('./models/Entry');
require('./models/User'); // Füge dies hinzu

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routen
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/entries', require('./routes/entryRoutes'));

const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Datenbank synchronisiert');
  })
  .catch((error) => {
    console.error('Fehler beim Synchronisieren der Datenbank:', error);
  });

app.listen(PORT, async () => {
  console.log(`Server läuft auf Port ${PORT}`);
  try {
    // Entferne eine der beiden Synchronisierungen oder behalte nur eine
    // await sequelize.sync();
    // console.log('Datenbank synchronisiert.');
  } catch (error) {
    console.error('Fehler beim Synchronisieren der Datenbank:', error);
  }
});
