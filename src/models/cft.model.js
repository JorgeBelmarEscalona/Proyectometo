// Importa el módulo 'mongoose' para crear la conexión a la base de datos
const mongoose = require('mongoose');

// Crea el esquema de la colección 'Cft'
const cftSchema = new mongoose.Schema({
  id_cft: {
    type: Number,
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

// Crea el modelo de datos 'Cft' a partir del esquema 'CftSchema'
const cft = mongoose.model('Cft', cftSchema);

// Exporta el modelo de datos 'Cft'
module.exports = cft;