const mongoose = require('mongoose');

const technologySchema = new mongoose.Schema({
    name: { type: String, required: true },
    icon: { type: String }, // URL del icono
    category: {
        type: String,
        enum: ['frontend', 'backend', 'database', 'tools', 'other'],
        default: 'other'
    },
}, { timestamps: true });

module.exports = mongoose.model('Technology', technologySchema);