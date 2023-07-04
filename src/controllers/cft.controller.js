// Importa el modelo de datos 'cft'
const CFT = require('../models/cft.model.js');

// Obtener todos los registros de cft
exports.getCft = async (req, res) => {
  try {
    const cftData = await CFT.find();
    res.status(200).json(cftData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo registro de cft (POST)
exports.createCft = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const {
      id_cft,
      fecha_cft,
      direccion,
      estado_cft,
      nombre_curso
    } = req.body;
    
    // Crear una nueva instancia del modelo CFT con los datos proporcionados
    const newCft = new CFT({
      id_cft,
      fecha_cft,
      direccion,
      estado_cft,
      nombre_curso
    });
    
    // Guardar el nuevo registro de cft en la base de datos
    const savedCft = await newCft.save();
    
    // Responder con el registro creado
    res.status(201).json(savedCft);
  } catch (error) {
    // Manejar errores
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un registro de cft existente (PUT)
exports.updateCft = async (req, res) => {
  try {
    // Obtener el ID del registro a actualizar de los parámetros de la ruta
    const cftId = req.params.id;
    
    // Obtener los nuevos datos del cuerpo de la solicitud
    const {
      id_cft,
      fecha_cft,
      direccion,
      estado_cft,
      nombre_curso
    } = req.body;

    // Actualizar el registro correspondiente en la base de datos
    const updatedCft = await CFT.findByIdAndUpdate(
      cftId,
      {
        $set: {
          id_cft,
          fecha_cft,
          direccion,
          estado_cft,
          nombre_curso
        },
      },
      { new: true }
    );
    
    // Responder con el registro actualizado
    res.status(200).json(updatedCft);
  } catch (error) {
    // Manejar errores
    res.status(400).json({ message: error.message });
  }
};

// Obtener un registro de cft por su ID (Read)
exports.getCftById = async (req, res) => {
  try {
    const cftId = req.params.id;
    const cftData = await CFT.findById(cftId);
    if (!cftData) {
      res.status(404).json({ message: 'Registro de cft no encontrado' });
    } else {
      res.status(200).json(cftData);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un registro de cft existente (Delete)
exports.deleteCft = async (req, res) => {
  try {
    const cftId = req.params.id;
    await CFT.findByIdAndRemove(cftId);
    res.status(200).json({ message: 'Registro de cft eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};