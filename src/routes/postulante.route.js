// Importa el módulo 'express' para crear las rutas
const express = require('express');

// Importa el controlador de postulante
const postulanteController = require('../controllers/postulante.controller.js');

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los postulante
router.get('/', usuarioController.getPostulante);
router.post('/', usuarioController.createPostulante);

// Exporta el enrutador
module.exports = router;