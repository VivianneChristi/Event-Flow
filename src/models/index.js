const sequelize = require('../config/database');
const Evento = require('./evento');
const Participante = require('./participante');

// Sincronizar todos os modelos com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Tabelas sincronizadas.');
  })
  .catch(err => {
    console.error('Erro ao sincronizar tabelas:', err);
  });

module.exports = {
  Evento,
  Participante
};
