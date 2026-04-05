const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true }, // ej: "Full Stack Developer"
    bio: { type: String },
    photo: { type: String }, // URL de la foto
    cv: { type: String },    // URL del PDF del CV
    email: { type: String },
    socials: {
        github: { type: String },
        linkedin: { type: String },
        twitter: { type: String },
    },
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);