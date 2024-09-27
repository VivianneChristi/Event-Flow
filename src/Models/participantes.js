const { DataTypes } = require('sequelize');
const sequelize = require('../config/database/database');
const Evento = require('./eventos');

const Participante = sequelize.define('Participante', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
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
            model: 'Eventos',
            key: 'id'
        },
        allowNull: false
    }
}, {
    timestamps: true
});

// Definições de relacionamento
Evento.hasMany(Participante, { onDelete: 'CASCADE' });
Participante.belongsTo(Evento, { foreignKey: 'eventoId' });

module.exports = Participante;