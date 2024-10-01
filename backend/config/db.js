// backend/config/db.js
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Pfad zu deiner SQLite-Datei
  logging: false, // Optional: Deaktiviere Logging
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Verbindung zur Datenbank erfolgreich.');
    await sequelize.query('PRAGMA journal_mode = WAL;');
    console.log('WAL-Modus aktiviert.');
  } catch (err) {
    console.error('Fehler beim Verbinden zur Datenbank:', err);
    process.exit(1); // Beende den Prozess bei einem Verbindungsfehler
  }
};

module.exports = { sequelize, connectDB };
