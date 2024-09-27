const Participante = require('../Models/participantes');

// Listar todos os participantes
exports.getParticipantes = async (req, res) => {
    try {
        const participantes = await Participante.findAll();
        res.json(participantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Criar um novo participante
exports.createParticipante = async (req, res) => {
    try {
        const { email, eventoId } = req.body;

        // Verificar se o participante já está inscrito no evento
        const participanteExistente = await Participante.findOne({ where: { email, eventoId } });
        if (participanteExistente) {
            return res.status(400).json({ error: 'Participante já cadastrado para este evento' });
        }

        const participante = await Participante.create(req.body);
        res.status(201).json(participante);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Buscar detalhes de um participante específico
exports.getParticipanteById = async (req, res) => {
    try {
        const participante = await Participante.findByPk(req.params.id);
        if (!participante) return res.status(404).json({ error: 'Participante não encontrado' });
        res.json(participante);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Atualizar um participante
exports.updateParticipante = async (req, res) => {
    try {
        const participante = await Participante.findByPk(req.params.id);
        if (!participante) return res.status(404).json({ error: 'Participante não encontrado' });

        await participante.update(req.body);
        res.json(participante);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Excluir um participante
exports.deleteParticipante = async (req, res) => {
    try {
        const participante = await Participante.findByPk(req.params.id);
        if (!participante) return res.status(404).json({ error: 'Participante não encontrado' });

        await participante.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
