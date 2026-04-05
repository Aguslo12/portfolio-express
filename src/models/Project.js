const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String }], // Array de URLs
    technologies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Technology' }],
    githubUrl: { type: String },
    deployUrl: { type: String },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);