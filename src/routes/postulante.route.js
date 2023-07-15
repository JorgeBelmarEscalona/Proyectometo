
// Importa el módulo 'express' para crear las rutas
const express = require('../controllers/postulante.controller');

// Importa el controlador de postulante
const postulanteController = require('../controllers/postulante.controller.js');

// Crea una instancia del enrutador
const router = express.Router();
// Define las rutas para los cft
router.get('/GET', postulanteController.getPostulante);
router.get('/GET/:id',postulanteController.getPostulanteById);
router.post('/CREATE', postulanteController.createPostulante);
router.put('/UPDATE/:id',postulanteController.updatePostulante); 
router.delete('/DELETE/:id',postulanteController.deletePostulante);


// Exporta el enrutador
module.exports = router;