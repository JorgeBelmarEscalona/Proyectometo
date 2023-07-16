// Importa el modelo de datos 'solicita'
const Solicita = require('../models/solicita.model.js');

// Obtener todos los registros de solicita
exports.getSolicita = async (req, res) => {
  try {
    const solicitaData = await Solicita.find();
    res.status(200).json(solicitaData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un registro de solicita por su ID (Read)
exports.getSolicitaById = async (req, res) => {
  try {
    const solicitaId = req.params.id;
    const solicita = await Solicita.findById(solicitaId);
    
    if (!solicita) {
      // Si no se encuentra el registro, responder con un mensaje de error
      res.status(404).json({ message: 'Registro de solicita no encontrado' });
    } else {
      // Si se encuentra el registro, responder con el registro encontrado
      res.status(200).json(solicita);
    }
  } catch (error) {
    // Manejar errores
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo registro de solicita (POST)
exports.createSolicita = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const {
      id_solicita,
      fecha_solicita,
      estado_solicita,
      postulante,
      brigada
    } = req.body;
    
    // Crear una nueva instancia del modelo Solicita con los datos proporcionados
    const newSolicita = new Solicita({
      id_solicita,
      fecha_solicita,
      estado_solicita,
      postulante,
      brigada
    });
    
    // Guardar el nuevo registro de solicita en la base de datos
    const savedSolicita = await newSolicita.save();
    
    // Responder con el registro creado
    res.status(201).json(savedSolicita);
  } catch (error) {
    // Manejar errores
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un registro de solicita existente (PUT)
exports.updateSolicita = async (req, res) => {
  try {
    // Obtener el ID del registro a actualizar de los parámetros de la ruta
    const solicitaId = req.params.id;
  
   // Verificar si el postulante existe en la base de datos
   const existingSolicita = await Solicita.findById(solicitaId);
   if (!existingSolicita) {
     return res.status(404).json({ message: 'No se encontró ningúna solicitud con el ID proporcionado' });
   }

    // Obtener los nuevos datos del cuerpo de la solicitud
    const {
      id_solicita,
      fecha_solicita,
      estado_solicita,
      postulante,
      brigada
    } = req.body;

    // Actualizar el registro correspondiente en la base de datos
    const updatedSolicita = await Solicita.findByIdAndUpdate(
      solicitaId,
      {
        $set: {
          id_solicita,
          fecha_solicita,
          estado_solicita,
          postulante,
          brigada
        },
      },
      { new: true }
    );
    
    // Responder con el registro actualizado
    res.status(200).json(updatedSolicita);
  } catch (error) {
    // Manejar errores
    res.status(400).json({ message: error.message });
  }
};



// Eliminar un registro de solicita por su ID (Delete)
exports.deleteSolicita = async (req, res) => {
  try {
    const solicitaId = req.params.id;
    const deletedSolicita = await Solicita.findByIdAndRemove(solicitaId);
    
    if (!deletedSolicita) {
      // Si no se encuentra el registro, responder con un mensaje de error
      res.status(404).json({ message: 'Registro de solicita no encontrado' });
    } else {
      // Si se encuentra el registro y se elimina correctamente, responder con el registro eliminado
      res.status(200).json(deletedSolicita);
    }
  } catch (error) {
    // Manejar errores
    res.status(500).json({ message: error.message });
  }
};