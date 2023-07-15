// Importa el módulo 'express' para crear las rutas
const express = require('express');

// Importa el enrutador de usuarios
const achsRoutes = require('./achs.route');
const brigadaRoutes = require('./brigada.route');
const cftRoutes = require('./cft.route');
const postulanteRoutes = require('./postulante.route');
const solicitaRoutes = require('./solicita.route');
const temporadaRoutes = require('./temporada.route');

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