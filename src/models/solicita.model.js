// Importa el módulo 'mongoose' para crear la conexión a la base de datos
const mongoose = require('mongoose');

// Crea el esquema de la colección 'tareas'
const solicitaSchema = new mongoose.Schema({
  id_solicitud: {
    type: int,
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
// Crea el modelo de datos 'Tarea' a partir del esquema 'tareaSchema'
const solicita = mongoose.model('Tarea', solicitaSchema);

// Exporta el modelo de datos 'Tarea'
module.exports = solicita;