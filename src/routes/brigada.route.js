// Importa el módulo 'express' para crear las rutas
const express = require('express');

// Importa el controlador de brigada
const brigadaController = require('../controllers/brigada.controller.js');

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los brigada
router.get('/GET', brigadaController.getBrigada);
router.get('/GET/:id',brigadaController.getBrigadaById);
router.post('/CREATE', brigadaController.createBrigada);
router.put('/UPDATE/:id',brigadaController.updateBrigada); 
router.delete('/DELETE/:id',brigadaController.deleteBrigada);

// Exporta el enrutador
module.exports = router;