const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Evento = require('./evento');

const Participante = sequelize.define('Participante', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  eventoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Evento,
      key: 'id'
    }
  }
});

// Definir relações entre Evento e Participante
Evento.hasMany(Participante, { onDelete: 'CASCADE' });
Participante.belongsTo(Evento);

module.exports = Participante;
