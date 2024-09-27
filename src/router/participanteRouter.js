const express = require('express');
const router = express.Router();
const participanteController = require('../controller/participanteController');

router.get('/', participanteController.getParticipantes);
router.post('/', participanteController.createParticipante);
router.get('/:id', participanteController.getParticipanteById);
router.put('/:id', participanteController.updateParticipante);
router.delete('/:id', participanteController.deleteParticipante);

module.exports = router; // Certifique-se de que está exportando o router
