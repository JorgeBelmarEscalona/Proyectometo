// Importa el módulo 'express' para crear las rutas
const express = require('express');

// Importa el controlador de brigada
const brigadaController = require('../controllers/brigada.controller.js');

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los brigada
router.get('/', usuarioController.getBrigada);
router.post('/', usuarioController.createBrigada);

// Exporta el enrutador
module.exports = router;