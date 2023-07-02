// Importa el modelo de datos 'solicita'
const solicita = require('../models/solicita.model.js');

exports.getSolicita = async (req, res) => {
  try {
    const solicita = await SOLICITA.find();
    res.status(200).json(solicita);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSolicita = async (req, res) => {
  try {
    const solicita = new solicita({
        id_solicita: req.body.id_solicita,
        fecha_solicitud: req.body.fecha_solicitud,
        estado_solicitud: req.body.estado_solicitud,
        id_postulante: req.body.id_postulante,
        id_brigada: req.body.id_brigada,
    });

    const nuevosolicita = await solicita.save();
    res.status(201).json(nuevosolicita);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};