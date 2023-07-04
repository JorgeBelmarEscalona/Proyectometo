// Importa el modelo de datos 'Temporada'
const Temporada = require('../models/temporada.model.js');

// Obtener todos los registros de Temporada
exports.getTemporada = async (req, res) => {
  try {
    const temporadaData = await Temporada.find();
    res.status(200).json(temporadaData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo registro de Temporada (POST)
exports.createTemporada = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const {
      id_temp,
      nombre_temp,
      fecha_inicio,
      fecha_termino,
      descripcion
    } = req.body;
    
    // Crear una nueva instancia del modelo Temporada con los datos proporcionados
    const newTemporada = new Temporada({
      id_temp,
      nombre_temp,
      fecha_inicio,
      fecha_termino,
      descripcion
    });
    
    // Guardar el nuevo registro de Temporada en la base de datos
    const savedTemporada = await newTemporada.save();
    
    // Responder con el registro creado
    res.status(201).json(savedTemporada);
  } catch (error) {
    // Manejar errores
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un registro de Temporada existente (PUT)
exports.updateTemporada = async (req, res) => {
  try {
    // Obtener el ID del registro a actualizar de los parámetros de la ruta
    const temporadaId = req.params.id;
    
    // Obtener los nuevos datos del cuerpo de la solicitud
    const {
      id_temp,
      nombre_temp,
      fecha_inicio,
      fecha_termino,
      descripcion
    } = req.body;

    // Actualizar el registro correspondiente en la base de datos
    const updatedTemporada = await Temporada.findByIdAndUpdate(
      temporadaId,
      {
        $set: {
          id_temp,
          nombre_temp,
          fecha_inicio,
          fecha_termino,
          descripcion
        },
      },
      { new: true }
    );
    
    // Responder con el registro actualizado
    res.status(200).json(updatedTemporada);
  } catch (error) {
    // Manejar errores
    res.status(400).json({ message: error.message });
  }
};

// Obtener un registro de Temporada por su ID (Read)
exports.getTemporadaById = async (req, res) => {
  try {
    const temporadaId = req.params.id;
    const temporada = await Temporada.findById(temporadaId);
    
    if (!temporada) {
      // Si no se encuentra el registro, responder con un mensaje de error
      res.status(404).json({ message: 'Registro de Temporada no encontrado' });
    } else {
      // Si se encuentra el registro, responder con el registro encontrado
      res.status(200).json(temporada);
    }
  } catch (error) {
    // Manejar errores
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un registro de Temporada por su ID (Delete)
exports.deleteTemporada = async (req, res) => {
  try {
    const temporadaId = req.params.id;
    const deletedTemporada = await Temporada.findByIdAndRemove(temporadaId);
    
    if (!deletedTemporada) {
      // Si no se encuentra el registro, responder con un mensaje de error
      res.status(404).json({ message: 'Registro de Temporada no encontrado' });
    } else {
      // Si se encuentra el registro y se elimina correctamente, responder con el registro eliminado
      res.status(200).json(deletedTemporada);
    }
  } catch (error) {
    // Manejar errores
    res.status(500).json({ message: error.message });
  }
};