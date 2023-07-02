// Importa el módulo 'express' para crear las rutas
const express = require('express');

// Importa el controlador de temporada
const temporadaController = require('../controllers/temporada.controller.js');

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los temporada
router.get('/', usuarioController.getTemporada);
router.post('/', usuarioController.createTemporada);

// Exporta el enrutador
module.exports = router;