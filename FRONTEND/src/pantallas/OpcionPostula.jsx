import  { useState } from 'react';
import { Box, Button } from '@mui/material';
import InscripcionPostulante from './InscripcionPostulante';

const OpcionPostula = () => {
  const [showInscripcion, setShowInscripcion] = useState(false);

  const handleRealizarPostulacionClick = () => {
    setShowInscripcion(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      {showInscripcion ? (
        <InscripcionPostulante />
      ) : (
        <>
          <Button variant="contained" color="primary" size="large" onClick={handleRealizarPostulacionClick} sx={{ mb: 2, backgroundColor: '#DF0808' }}>
            Realizar Postulación
          </Button>
          <Box sx={{ height: 30 }} />
          <Button variant="contained" color="primary" size="large" sx={{ backgroundColor: '#DF0808' }}>
            Revisar Solicitudes
          </Button>
        </>
      )}
    </Box>
  );
};

export default OpcionPostula;
