// backend/models/User.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Benutzername muss einzigartig sein
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // E-Mail muss einzigartig sein
    validate: {
      isEmail: true, // Validiert E-Mail-Format
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Neue Felder hinzufügen
  failedAttempts: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  isLocked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  lockUntil: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = User;
