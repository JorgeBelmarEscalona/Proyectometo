// Importa el modelo de datos 'cft'
const cft = require('../models/cft.model.js');

exports.getCft = async (req, res) => {
  try {
    const cft = await CFT.find();
    res.status(200).json(cft);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCft = async (req, res) => {
  try {
    const cft = new cft({
        id_cft: req.body.id_cft,
        fecha_cft: req.body.fecha_cft,
        direccion: req.body.direccion,
        estado_cft: req.body.estado_cft,
        nombre_curso: req.body.nombre_curso,
    });

    const nuevocft= await cft.save();
    res.status(201).json(nuevocft);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};