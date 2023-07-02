// Importa el módulo 'express' para crear las rutas
const express = require('express');

// Importa el controlador de cft
const cftController = require('../controllers/cft.controller.js');

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los cft
router.get('/', usuarioController.getCft);
router.post('/', usuarioController.createCft);

// Exporta el enrutador
module.exports = router;