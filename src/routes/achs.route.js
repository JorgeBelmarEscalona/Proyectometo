// Importa el módulo 'express' para crear las rutas
const express = require('express');

// Importa el controlador de achs
const achsController = require('../controllers/achs.controller');

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los achs
router.get('/GET', achsController.getAchs);
router.post('/CREATE', achsController.createAchs);
router.put('/UPDATE/:id_achs',achsController.updateAchs); 

// Exporta el enrutador 
module.exports = router;