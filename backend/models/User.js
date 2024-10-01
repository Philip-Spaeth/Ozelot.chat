// backend/models/User.js
const { sequelize } = require('../config/db');
const { DataTypes, Model } = require('sequelize');

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 25],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
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
  }, // <-- Schließende Klammer für das Attribut-Objekt
  {
    sequelize, // Sequelize-Instanz
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
  }
);

module.exports = User;
