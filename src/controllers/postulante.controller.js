// Importa el modelo de datos 'postulante'
const postulante = require('../models/postulante.model.js');

exports.getPostulante = async (req, res) => {
  try {
    const postulante = await POSTULANTE.find();
    res.status(200).json(postulante);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPostulante = async (req, res) => {
  try {
    const postulante = new postulante({
        id_postulante: req.body.id_postulante,
        cod_postal: req.body.cod_postal,
        nombre_postulante: req.body.nombre_postulante,
        correo_postulante: req.body.correo_postulante,
        nivel_escolar: req.body.nivel_escolar,
        telefono_postulante: req.body.telefono_postulante,
        edad_postulante: req.body.edad_postulante,
        id_achs: req.body.id_achs,
        id_brigada: req.body.id_brigada,
        id_cft: req.body.id_cft,

    });

    const nuevopostulante= await usuario.save();
    res.status(201).json(nuevopostulante);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};