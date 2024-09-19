const express = require('express');
const Participante = require('../models/participante');
const router = express.Router();

// Rota para listar todos os participantes
router.get('/', (req, res) => {
  Participante.findAll()
    .then(participantes => res.json(participantes))
    .catch(err => res.status(500).json({ erro: err.message }));
});

// Rota para criar um novo participante
router.post('/', (req, res) => {
  const { nome, email, eventoId } = req.body;

  Participante.create({ nome, email, eventoId })
    .then(participante => res.status(201).json(participante))
    .catch(err => res.status(400).json({ erro: err.message }));
});

// Rota para buscar um participante específico por ID
router.get('/:id', (req, res) => {
  Participante.findByPk(req.params.id)
    .then(participante => {
      if (!participante) {
        return res.status(404).json({ erro: 'Participante não encontrado' });
      }
      res.json(participante);
    })
    .catch(err => res.status(500).json({ erro: err.message }));
});

// Rota para atualizar um participante
router.put('/:id', (req, res) => {
  const { nome, email, eventoId } = req.body;

  Participante.findByPk(req.params.id)
    .then(participante => {
      if (!participante) {
        return res.status(404).json({ erro: 'Participante não encontrado' });
      }
      return participante.update({ nome, email, eventoId });
    })
    .then(participanteAtualizado => res.json(participanteAtualizado))
    .catch(err => res.status(400).json({ erro: err.message }));
});

// Rota para excluir um participante
router.delete('/:id', (req, res) => {
  Participante.findByPk(req.params.id)
    .then(participante => {
      if (!participante) {
        return res.status(404).json({ erro: 'Participante não encontrado' });
      }
      return participante.destroy();
    })
    .then(() => res.status(204).send())
    .catch(err => res.status(500).json({ erro: err.message }));
});

module.exports = router;
