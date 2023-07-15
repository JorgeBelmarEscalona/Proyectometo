// Importa el módulo 'mongoose' para crear la conexión a la base de datos
const mongoose = require('mongoose');

// Crea el esquema de la colección 'temporadaSChema'
const temporadaSchema = new mongoose.Schema({
  id_temp: {
    type: Number,
    required: true,
    notnull: true,
    unique: true,
  },
  nombre_temp: {
    type: String,
    required: true,
    notnull: true,
  },
  fecha_inicio: {
    type: Date,
    required: true,
    notnull: true,
  },
  fecha_termino: {
    type: Date,
    required: true,
    notnull: true,
  },
  descripcion: {
    type: String,
    required: true,
    notnull: true,
  },
});

// Crea el modelo de datos 'Temporada' a partir del esquema 'TemporadaSchema'
const temporada = mongoose.model('Temporada', temporadaSchema);

// Exporta el modelo de datos 'temporada'
module.exports = temporada;