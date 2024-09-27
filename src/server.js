const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database/database');
const eventoRouter = require('./router/eventoRouter');
const participanteRouter = require('./router/participanteRouter');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/evento', eventoRouter);
app.use('/participante', participanteRouter);

sequelize.sync()
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(err => console.error(err));
