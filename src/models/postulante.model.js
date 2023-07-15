// Importa el módulo 'mongoose' para crear la conexión a la base de datos
const mongoose = require('mongoose');

// Crea el esquema de la colección 'Postulante'
const postulanteSchema = new mongoose.Schema({
  id_postulante: {
    type: Number,
    required: true,
    notnull: true,
    unique: true,
  },
  cod_postal: {
    type: Number,
    required: true,
    notnull: true,
  },
  nombre_postulante: {
    type: String,
    required: true,
    notnull: true,
  },
  correo_postulante: {
    type: String,
    required: true,
    notnull: true,
    unique: true,
  },
  nivel_escolar: {
    type: Boolean,
    required: true,
    notnull: true,
  },
  telefono_postulante: {
    type: Number,
    notnull: true,
    unique: true,
  },
  edad_postulante: {
    type: Number,
    required: true,
    notnull: true,
  
  },
  achs: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'achs',
    required: true,
  },
  brigada: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'brigada',
    required: true,
  },
  cft: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cft',
    required: true,
  },

});

// Crea el modelo de datos 'Postulante' a partir del esquema 'PostulanteSchema'
const postulante = mongoose.model('Postulante', postulanteSchema);

// Exporta el modelo de datos 'Postulante'
module.exports = postulante;// Importa el módulo 'mongoose' para crear la conexión a la base de datos
