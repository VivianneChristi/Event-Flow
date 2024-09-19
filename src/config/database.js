const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('eventflow', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
