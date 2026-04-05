const router = require('express').Router();
const Technology = require('../models/Technology');

router.get('/', async (req, res) => {
    try {
        const technologies = await Technology.find().sort({ category: 1 });
        res.json(technologies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const technology = new Technology(req.body);
        const saved = await technology.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updated = await Technology.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Technology.findByIdAndDelete(req.params.id);
        res.json({ message: 'Tecnología eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;