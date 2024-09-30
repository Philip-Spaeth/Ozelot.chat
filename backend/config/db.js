// backend/config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE || './database.sqlite',
  });
  

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Verbindung zur SQLite-Datenbank hergestellt.');
  } catch (error) {
    console.error('Fehler beim Verbinden mit der Datenbank:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
