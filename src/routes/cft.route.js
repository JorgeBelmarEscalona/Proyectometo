
// Importa el módulo 'express' para crear las rutas
const express = require('../controllers/cft.controller');

// Importa el controlador de cft
const cftController = require('../controllers/cft.controller.js');

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los cft
router.get('/GET', cftController.getCft);
router.get('/GET/:id',cftController.getCftById);
router.post('/CREATE', cftController.createCft);
router.put('/UPDATE/:id',cftController.updateCft); 
router.delete('/DELETE/:id',cftController.deleteCft);

// Exporta el enrutador
module.exports = router;