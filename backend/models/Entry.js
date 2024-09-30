// backend/models/Entry.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Entry = sequelize.define('Entry', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Entry;
