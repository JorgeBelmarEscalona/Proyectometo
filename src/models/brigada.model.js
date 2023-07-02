// Importa el módulo 'mongoose' para crear la conexión a la base de datos
const mongoose = require('mongoose');

// Crea el esquema de la colección 'tareas'
const brigadaSchema = new mongoose.Schema({
  id_brigada: {
    type: Int,
    required: true,
    notnull: true,
    unique: true,
  },
  nombre_brigada: {
    type: String,
    required: true,
    notnull: true,
  },
  direccion_brigada: {
    type: String,
    required: true,
    notnull: true,
  },
  correo_brigada: {
    type: String,
    required: true,
    notnull: true,
  },
  lider_brigada: {
    type: String,
    required: true,
    notnull: true,
  },
  activa: {
    type: Boolean,
    required: true,
  },
  temporada: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'temporada',
    required: true,
  },

});

// Crea el modelo de datos 'Tarea' a partir del esquema 'tareaSchema'
const brigada = mongoose.model('Tarea', brigadaSchema);

// Exporta el modelo de datos 'Tarea'
module.exports = brigada;

