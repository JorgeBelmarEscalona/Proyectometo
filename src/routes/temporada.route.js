// Importa el módulo 'express' para crear las rutas
const express = require('../controllers/temporada.controller');

// Importa el controlador de temporada
const temporadaController = require('../controllers/temporada.controller.js');

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los temporada
router.get('/GET', temporadaController.getTemporada);
router.get('/GET/:id',temporadaController.getTemporadaById)
router.post('/CREATE', temporadaController.createTemporada);
router.put('/UPDATE/:id',temporadaController.updateTemporada); 
router.delete('/DELETE/:id',temporadaController.deleteTemporada);

// Exporta el enrutador
module.exports = router;