// Importa el módulo 'mongoose' para crear la conexión a la base de datos
const mongoose = require('mongoose');

// Crea el esquema de la colección 'Brigada'
const brigadaSchema = new mongoose.Schema({
  id_brigada: {
    type: Number,
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

// Crea el modelo de datos 'Brigada' a partir del esquema 'BrigadaSchema'
const brigada = mongoose.model('Brigada', brigadaSchema);

// Exporta el modelo de datos 'Brigada'
module.exports = brigada;

