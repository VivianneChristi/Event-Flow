const express = require('express');
const { Sequelize } = require('sequelize');

// Importar modelos
const Evento = require('./models/evento');
const Participante = require('./models/participante');

// Importar roteadores
const eventoRouter = require('./router/eventoRouter');
const participanteRouter = require('./router/participanteRouter');

// Inicializar o app Express
const app = express();

// Middleware para parse de JSON
app.use(express.json());

// Configurações do banco de dados
const sequelize = new Sequelize('eventflow', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

// Verificar se a conexão com o banco de dados foi estabelecida
sequelize.authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

// Sincronizar o banco de dados (criar tabelas se ainda não existirem)
sequelize.sync({ force: false })
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao sincronizar tabelas:', err);
  });

// Usar os roteadores
app.use('/eventos', eventoRouter);
app.use('/participantes', participanteRouter);

// Configuração do servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
