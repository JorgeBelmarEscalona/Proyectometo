// Importa el módulo 'mongoose' para crear la conexión a la base de datos
const mongoose = require('mongoose');

// Crea el esquema de la colección 'Solicita'
const solicitaSchema = new mongoose.Schema({
  id_solicitud: {
    type: Number,
    required: true,
    notnull: true,
    unique: true,
  },
  fecha_solicitud: {
    type: Date,
    required: true,
    notnull: true,
  },
  estado_solicitud: {
    type: String,
    required: true,
    notnull: true,
  },
  postulante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'postulante',
    required: true,
  },
  brigada: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'brigada',
    required: true,
  },
  
  
});
// Crea el modelo de datos 'Solicita' a partir del esquema 'SolicitaSchema'
const solicita = mongoose.model('Solicita', solicitaSchema);

// Exporta el modelo de datos 'Solicita'
module.exports = solicita;