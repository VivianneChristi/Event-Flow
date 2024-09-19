const express = require('express');
const Evento = require('../models/evento');
const router = express.Router();

// Rota para listar todos os eventos
router.get('/', (req, res) => {
  Evento.findAll()
    .then(eventos => res.json(eventos))
    .catch(err => res.status(500).json({ erro: err.message }));
});

// Rota para criar um novo evento
router.post('/', (req, res) => {
  const { nome, data, localizacao } = req.body;

  Evento.create({ nome, data, localizacao })
    .then(evento => res.status(201).json(evento))
    .catch(err => res.status(400).json({ erro: err.message }));
});

// Rota para buscar um evento específico por ID
router.get('/:id', (req, res) => {
  Evento.findByPk(req.params.id)
    .then(evento => {
      if (!evento) {
        return res.status(404).json({ erro: 'Evento não encontrado' });
      }
      res.json(evento);
    })
    .catch(err => res.status(500).json({ erro: err.message }));
});

// Rota para atualizar um evento
router.put('/:id', (req, res) => {
  const { nome, data, localizacao } = req.body;
  
  Evento.findByPk(req.params.id)
    .then(evento => {
      if (!evento) {
        return res.status(404).json({ erro: 'Evento não encontrado' });
      }
      return evento.update({ nome, data, localizacao });
    })
    .then(eventoAtualizado => res.json(eventoAtualizado))
    .catch(err => res.status(400).json({ erro: err.message }));
});

// Rota para excluir um evento
router.delete('/:id', (req, res) => {
  Evento.findByPk(req.params.id)
    .then(evento => {
      if (!evento) {
        return res.status(404).json({ erro: 'Evento não encontrado' });
      }
      return evento.destroy();
    })
    .then(() => res.status(204).send())
    .catch(err => res.status(500).json({ erro: err.message }));
});

module.exports = router;
