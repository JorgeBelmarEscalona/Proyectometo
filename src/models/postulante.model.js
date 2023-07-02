// Importa el módulo 'mongoose' para crear la conexión a la base de datos
const mongoose = require('mongoose');

// Crea el esquema de la colección 'tareas'
const postulanteSchema = new mongoose.Schema({
  id_postulante: {
    type: int,
    required: true,
    notnull: true,
    unique: true,
  },
  cod_postal: {
    type: int,
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
    type: Int,
    notnull: true,
    unique: true,
  },
  edad_postulante: {
    type: Int,
    required: true,
    notnull: true,
    unique: true,
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

// Crea el modelo de datos 'Tarea' a partir del esquema 'tareaSchema'
const postulante = mongoose.model('Tarea', postulanteSchema);

// Exporta el modelo de datos 'Tarea'
module.exports = postulante;// Importa el módulo 'mongoose' para crear la conexión a la base de datos
