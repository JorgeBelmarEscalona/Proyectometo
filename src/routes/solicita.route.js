// Importa el módulo 'express' para crear las rutas
const express = require('express');

// Importa el controlador de solicita
const solicitaController = require('../controllers/solicita.controller.js');

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los solicita
router.get('/', usuarioController.getSolicita);
router.post('/', usuarioController.createSolicita);

// Exporta el enrutador
module.exports = router;