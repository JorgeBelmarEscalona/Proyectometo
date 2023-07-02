// Importa el módulo 'mongoose' para crear la conexión a la base de datos
const { text } = require('express');
const mongoose = require('mongoose');

// Crea el esquema de la colección 'tareas'
const cftSchema = new mongoose.Schema({
  id_cft: {
    type: Int,
    required: true,
    notnull: true,
    unique: true,
  },
  fecha_cft: {
    type: Date,
    required: true,
    notnull: true,
  },
  direccion: {
    type: String,
    required: true,
    notnull: true,
  },
  estado_cft: {
    type: Boolean,
    required: true,
    notnull: true,
  },
  nombre_curso: {
    type: String,
    required: true,
    notnull: true,
  },

});

// Crea el modelo de datos 'Tarea' a partir del esquema 'tareaSchema'
const cft = mongoose.model('Tarea', cftSchema);

// Exporta el modelo de datos 'Tarea'
module.exports = cft;