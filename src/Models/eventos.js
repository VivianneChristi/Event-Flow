const { DataTypes } = require('sequelize');
const sequelize = require('../config/database/database');

const Evento = sequelize.define('Evento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    localizacao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Evento;
