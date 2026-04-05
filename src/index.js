require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./db');

// Rutas
const projectsRouter = require('./routes/projects');
const technologiesRouter = require('./routes/technologies');
const profileRouter = require('./routes/profile');
const experienceRouter = require('./routes/experience');

const app = express();
const PORT = process.env.port || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Endpoints
app.use('/api/projects', projectsRouter);
app.use('/api/technologies', technologiesRouter);
app.use('/api/profile', profileRouter);
app.use('/api/experience', experienceRouter);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡API de Portafolio funcionando!');
});

// Conectar a MongoDB y levantar el servidor
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
});