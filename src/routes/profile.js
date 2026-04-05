const router = require('express').Router();
const Profile = require('../models/Profile');

router.get('/', async (req, res) => {
    try {
        const profile = await Profile.findOne();
        if (!profile) return res.status(404).json({ message: 'Perfil no encontrado' });
        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const exists = await Profile.findOne();
        if (exists) return res.status(400).json({ message: 'El perfil ya existe, usá PUT para actualizar' });
        const profile = new Profile(req.body);
        const saved = await profile.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/', async (req, res) => {
    try {
        const updated = await Profile.findOneAndUpdate({}, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;