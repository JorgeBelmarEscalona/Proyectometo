// Importa el módulo 'express' para crear las rutas
const express = require('express');

// Importa el enrutador de usuarios
const achsRoutes = require('./achs.routes.js');
const brigadaRoutes = require('./brigada.routes.js');
const cftRoutes = require('./cft.routes.js');
const postulanteRoutes = require('./postulante.routes.js');
const solicitaRoutes = require('./solicita.routes.js');
const temporadaRoutes = require('./temporada.routes.js');

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los usuarios /api/usuarios
router.use('/achs', achsRoutes);
router.use('/brigada', brigadaRoutes);
router.use('/cft', cftRoutes);
router.use('/postulante', postulanteRoutes);
router.use('/solicita', solicitaRoutes);
router.use('/temporada', temporadaRoutes);

// Exporta el enrutador
module.exports = router;