const Evento = require('../Models/eventos');

// Listar todos os eventos
exports.getEventos = async (req, res) => {
    try {
        const eventos = await Evento.findAll();
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Criar um novo evento
exports.createEvento = async (req, res) => {
    try {
        const evento = await Evento.create(req.body);
        res.status(201).json(evento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Buscar detalhes de um evento específico
exports.getEventoById = async (req, res) => {
    try {
        const evento = await Evento.findByPk(req.params.id);
        if (!evento) return res.status(404).json({ error: 'Evento não encontrado' });
        res.json(evento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Atualizar um evento
exports.updateEvento = async (req, res) => {
    try {
        const evento = await Evento.findByPk(req.params.id);
        if (!evento) return res.status(404).json({ error: 'Evento não encontrado' });

        await evento.update(req.body);
        res.json(evento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Excluir um evento
exports.deleteEvento = async (req, res) => {
    try {
        const evento = await Evento.findByPk(req.params.id);
        if (!evento) return res.status(404).json({ error: 'Evento não encontrado' });

        await evento.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
