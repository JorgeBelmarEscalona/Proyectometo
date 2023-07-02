// Importa el modelo de datos 'Temporada'
const temporada = require('../models/temporada.model.js');

exports.getTemporada = async (req, res) => {
  try {
    const temporada = await temporada.find();
    res.status(200).json(temporada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTemporada = async (req, res) => {
  try {
    const temporada = new temporada({
        id_temp: req.body.id_temp,
        nombre_temp: req.body.nombre_temp,
        fecha_inicio: req.body.fecha_inicio,
        fecha_termino: req.body.fecha_termino,
        descripcion: req.body.descripcion,
    });

    const nuevotemporada = await temporada.save();
    res.status(201).json(nuevotemporada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};