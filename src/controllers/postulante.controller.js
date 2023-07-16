// Importa el modelo de datos 'postulante'
const Postulante = require('../models/postulante.model.js');

// Obtener todos los registros de postulante
exports.getPostulante = async (req, res) => {
  try {
    const postulanteData = await Postulante.find();
    res.status(200).json(postulanteData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un registro de postulante por su ID (Read)
exports.getPostulanteById = async (req, res) => {
  try {
    const postulanteId = req.params.id;
    const postulante = await Postulante.findById(postulanteId);
    
    if (!postulante) {
      // Si no se encuentra el registro, responder con un mensaje de error
      res.status(404).json({ message: 'Registro de postulante no encontrado' });
    } else {
      // Si se encuentra el registro, responder con el registro encontrado
      res.status(200).json(postulante);
    }
  } catch (error) {
    // Manejar errores
    res.status(500).json({ message: error.message });
  }
};


// Crear un nuevo registro de postulante (POST)
exports.createPostulante = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const {
      id_postulante,
      cod_postal,
      nombre_postulante,
      correo_postulante,
      nivel_escolar,
      telefono_postulante,
      edad_postulante,
      achs,
      brigada,
      cft
    } = req.body;
  

    // Crear una nueva instancia del modelo Postulante con los datos proporcionados
    const newPostulante = new Postulante({
      id_postulante,
      cod_postal,
      nombre_postulante,
      correo_postulante,
      nivel_escolar,
      telefono_postulante,
      edad_postulante,
      achs,
      brigada,
      cft
    });
    // Guardar el nuevo registro de postulante en la base de datos
    const savedPostulante = await newPostulante.save();
   

    // Responder con el registro creado
    res.status(201).json(savedPostulante);
  } catch (error) {
    // Manejar errores
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un registro de postulante existente (PUT)
exports.updatePostulante = async (req, res) => {
  try {
    // Obtener el ID del registro a actualizar de los parámetros de la ruta
    const postulanteId = req.params.id;

    // Verificar si el postulante existe en la base de datos
    const existingPostulante = await Postulante.findById(postulanteId);
    if (!existingPostulante) {
      return res.status(404).json({ message: 'No se encontró ningún postulante con el ID proporcionado' });
    }
    // Obtener los nuevos datos del cuerpo de la solicitud
    const {
      id_postulante,
      cod_postal,
      nombre_postulante,
      correo_postulante,
      nivel_escolar,
      telefono_postulante,
      edad_postulante,
      achs,
      brigada,
      cft
    } = req.body;

    // Actualizar el registro correspondiente en la base de datos
    const updatedPostulante = await Postulante.findByIdAndUpdate(
      postulanteId,
      {
        $set: {
          id_postulante,
          cod_postal,
          nombre_postulante,
          correo_postulante,
          nivel_escolar,
          telefono_postulante,
          edad_postulante,
          achs,
          brigada,
          cft
        },
      },
      { new: true }
    );
    
    // Responder con el registro actualizado
    res.status(200).json(updatedPostulante);
  } catch (error) {
    // Manejar errores
    res.status(400).json({ message: error.message });
  }
};


// Eliminar un registro de postulante por su ID (Delete)
exports.deletePostulante = async (req, res) => {
  try {
    const postulanteId = req.params.id;
    const deletedPostulante = await Postulante.findByIdAndRemove(postulanteId);
    
    if (!deletedPostulante) {
      // Si no se encuentra el registro, responder con un mensaje de error
      res.status(404).json({ message: 'Registro de postulante no encontrado' });
    } else {
      // Si se encuentra el registro y se elimina correctamente, responder con el registro eliminado
      res.status(200).json(deletedPostulante);
    }
  } catch (error) {
    // Manejar errores
    res.status(500).json({ message: error.message });
  }
};