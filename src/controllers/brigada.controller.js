// Importa el modelo de datos 'brigada'
const brigada = require('../models/brigada.model.js');

exports.getBrigada = async (req, res) => {
  try {
    const brigada = await BRIGADA.find();
    res.status(200).json(brigada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBrigada = async (req, res) => {
  try {
    const brigada = new brigada({
        id_brigada: req.body.id_brigada,
        nombre_brigada: req.body.nombre_brigada,
        direccion_brigada: req.body.direccion_brigada,
        correo_brigada: req.body.correo_brigada,
        lider_brigada: req.body.lider_brigada,
        activa: req.body.activa,
        temporada: req.body.temporada,
    });

    const nuevobrigada = await brigada.save();
    res.status(201).json(nuevobrigada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};