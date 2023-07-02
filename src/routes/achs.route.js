// Importa el módulo 'express' para crear las rutas
const express = require('express');

// Importa el controlador de achs
const achsController = require('../controllers/achs.controller.js');

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los achs
router.get('/', usuarioController.getAchs);
router.post('/', usuarioController.createAchs);

// Exporta el enrutador
module.exports = router;