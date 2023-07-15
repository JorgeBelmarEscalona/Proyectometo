// Importa el módulo 'express' para crear las rutas
const express = require('express');

// Importa el controlador de solicita
const solicitaController = require('../controllers/solicita.controller.js');

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los solicita
router.get('/GET', solicitaController.getSolicita);
router.get('/GET/:id',solicitaController.getSolicitaById)
router.post('/CREATE', solicitaController.createSolicita);
router.put('/UPDATE/:id',solicitaController.updateSolicita); 
router.delete('/DELETE/:id',solicitaController.deleteSolicita);

// Exporta el enrutador
module.exports = router;
