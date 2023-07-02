// Importa el modelo de datos 'achs'
const achs = require('../models/achs.model.js');

exports.getAchs = async (req, res) => {
  try {
    const achs = await ACHS.find();
    res.status(200).json(achs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createAchs = async (req, res) => {
  try {
    const achs = new achs({
        id_achs: req.body.id_achs,
        certificado_achs: req.body.certificado_achs,
        direccion_achs: req.body.direccion_achs,
        examenes: req.body.examenes,
    });
    

    const nuevoachs = await achs.save();
    res.status(201).json(nuevoachs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};