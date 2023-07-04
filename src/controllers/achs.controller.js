// Importa el modelo de datos 'achs'
const Achs = require('../models/achs.model.js');

// Obtener todos los registros de achs
exports.getAchs = async (req, res) => {
  try {
    const achsData = await Achs.find();
    res.status(200).json(achsData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo registro de achs (POST)
exports.createAchs = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const { id_achs, certificado_achs, direccion_achs, examenes } = req.body;
    
    // Crear una nueva instancia del modelo Achs con los datos proporcionados
    const newAchs = new Achs({
      id_achs,
      certificado_achs,
      direccion_achs,
      examenes,
    });
    
    // Guardar el nuevo registro de achs en la base de datos
    const savedAchs = await newAchs.save();
    
    // Responder con el registro creado
    res.status(201).json(savedAchs);
  } catch (error) {
    // Manejar errores
    res.status(400).json({ message: error.message });
  }
};

// Obtener un registro de achs por su ID (Read)
exports.getAchsById = async (req, res) => {
  try {
    const achsId = req.params.id;
    const achsData = await Achs.findById(achsId);
    if (!achsData) {
      res.status(404).json({ message: 'Registro de achs no encontrado' });
    } else {
      res.status(200).json(achsData);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un registro de achs existente (PUT)
exports.updateAchs = async (req, res) => {
  try {
    // Obtener el ID del registro a actualizar de los parámetros de la ruta
    const achsId = req.params.id;
    
    // Obtener los nuevos datos del cuerpo de la solicitud
    const { id_achs, certificado_achs, direccion_achs, examenes } = req.body;

    // Actualizar el registro correspondiente en la base de datos
    const updatedAchs = await Achs.findByIdAndUpdate(
      achsId,
      {
        $set: {
          id_achs,
          certificado_achs,
          direccion_achs,
          examenes,
        },
      },
      { new: true }
    );
    
    // Responder con el registro actualizado
    res.status(200).json(updatedAchs);
  } catch (error) {
    // Manejar errores
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un registro de achs existente (Delete)
exports.deleteAchs = async (req, res) => {
  try {
    const achsId = req.params.id;

    const deletedAchs = await Achs.findByIdAndDelete(achsId);
    if (!deletedAchs) {
      res.status(404).json({ message: 'Registro de achs no encontrado' });
    } else {
      res.status(200).json({ message: 'Registro de achs eliminado correctamente' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};