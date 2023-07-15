// Importa el modelo de datos 'brigada'
const Brigada = require('../models/brigada.model.js');

// Obtener todos los registros de brigada
exports.getBrigada = async (req, res) => {
  try {
    const brigadaData = await Brigada.find();
    res.status(200).json(brigadaData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un registro de brigada por su ID (Read)
exports.getBrigadaById = async (req, res) => {
  try {
    const brigadaId = req.params.id;
    const brigadaData = await Brigada.findById(brigadaId);
    if (!brigadaData) {
      res.status(404).json({ message: 'Registro de brigada no encontrado' });
    } else {
      res.status(200).json(brigadaData);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Crear un nuevo registro de brigada (POST)
exports.createBrigada = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const {
      id_brigada,
      nombre_brigada,
      direccion_brigada,
      correo_brigada,
      lider_brigada,
      activa,
      temporada
    } = req.body;
   
    // Crear una nueva instancia del modelo Brigada con los datos proporcionados
    const newBrigada = new Brigada({
      id_brigada,
      nombre_brigada,
      direccion_brigada,
      correo_brigada,
      lider_brigada,
      activa,
      temporada
    });
   
    // Guardar el nuevo registro de brigada en la base de datos
    const savedBrigada = await newBrigada.save();

    // Responder con el registro creado
    res.status(201).json(savedBrigada);
  
  } catch (error) {
    // Manejar errores
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un registro de brigada existente (PUT)
exports.updateBrigada = async (req, res) => {
  try {
    // Obtener el ID del registro a actualizar de los parámetros de la ruta
    const brigadaId = req.params.id;
    
    // Obtener los nuevos datos del cuerpo de la solicitud
    const {
      id_brigada,
      nombre_brigada,
      direccion_brigada,
      correo_brigada,
      lider_brigada,
      activa,
      temporada
    } = req.body;

    // Actualizar el registro correspondiente en la base de datos
    const updatedBrigada = await Brigada.findByIdAndUpdate(
      brigadaId,
      {
        $set: {
          id_brigada,
          nombre_brigada,
          direccion_brigada,
          correo_brigada,
          lider_brigada,
          activa,
          temporada
        },
      },
      { new: true }
    );
    
    // Responder con el registro actualizado
    res.status(200).json(updatedBrigada);
  } catch (error) {
    // Manejar errores
    res.status(400).json({ message: error.message });
  }
};



// Eliminar un registro de brigada existente (Delete)
exports.deleteBrigada = async (req, res) => {
  try {
    const brigadaId = req.params.id;
    await Brigada.findByIdAndRemove(brigadaId);
    res.status(200).json({ message: 'Registro de brigada eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
