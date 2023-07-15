// Importa el módulo 'mongoose' para crear la conexión a la base de datos
const mongoose = require('mongoose');

// Crea el esquema de la colección 'achs'
const achsSchema = new mongoose.Schema({
  id_achs: {
    type: Number,
    required: true,
    notnull: true,
    unique: true,
  },
  certificado_achs: {
    type: String,
    required: true,
    notnull: true,
  },
  direccion_achs: {
    type: String,
    required: true,
    notnull: true,
  },
  examenes: {
    type: String,
    required: true,
    notnull: true,
  },
});

// Crea el modelo de datos 'Achs' a partir del esquema 'achsSchema'
const achs = mongoose.model('Achs', achsSchema);

// Exporta el modelo de datos 'Tarea'
module.exports = achs;