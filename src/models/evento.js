// Models/evento.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Evento = sequelize.define('Evento', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  },
  local: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'eventos', // Nome da tabela
  timestamps: false
});

module.exports = Evento;
