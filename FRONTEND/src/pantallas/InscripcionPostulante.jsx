import  { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const FormularioPostulante = () => {
  const [codPostal, setCodPostal] = useState('');
  const [nombrePostulante, setNombrePostulante] = useState('');
  const [correoPostulante, setCorreoPostulante] = useState('');
  const [nivelEscolar, setNivelEscolar] = useState('');
  const [telefonoPostulante, setTelefonoPostulante] = useState('');
  const [edadPostulante, setEdadPostulante] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    // Por ejemplo, puedes utilizar una función para realizar una solicitud HTTP o guardar los datos en una base de datos
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          maxWidth: 1500,
          padding: 16,
          backgroundColor: '#f0f0f0',
          borderRadius: 8,
          ml: 4,
        }}
      >
        <Typography variant="h4" component="div" sx={{ mb: 4 }}>
          Formulario de Postulante
        </Typography>

        <TextField
          label="Código Postal"
          variant="outlined"
          value={codPostal}
          onChange={(e) => setCodPostal(e.target.value)}
          required
          sx={{ mb: 2, width: '100%' }}
        />
        <TextField
          label="Nombre del Postulante"
          variant="outlined"
          value={nombrePostulante}
          onChange={(e) => setNombrePostulante(e.target.value)}
          required
          sx={{ mb: 2, width: '100%' }}
        />
        <TextField
          label="Correo del Postulante"
          variant="outlined"
          value={correoPostulante}
          onChange={(e) => setCorreoPostulante(e.target.value)}
          required
          sx={{ mb: 2, width: '100%' }}
        />
        <TextField
          label="Nivel Escolar"
          variant="outlined"
          value={nivelEscolar}
          onChange={(e) => setNivelEscolar(e.target.value)}
          required
          sx={{ mb: 2, width: '100%' }}
        />
        <TextField
          label="Teléfono del Postulante"
          variant="outlined"
          value={telefonoPostulante}
          onChange={(e) => setTelefonoPostulante(e.target.value)}
          required
          sx={{ mb: 2, width: '100%' }}
        />
        <TextField
          label="Edad del Postulante"
          variant="outlined"
          value={edadPostulante}
          onChange={(e) => setEdadPostulante(e.target.value)}
          required
          sx={{ mb: 2, width: '100%' }}
        />

        <Button variant="contained" color="primary" type="submit" sx={{ width: 150 }}>
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default FormularioPostulante;
