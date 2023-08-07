import { Box, AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';
import bomberoSvg from './assets/bombero.svg';
import OpcionPostula from './pantallas/opcionPostula'; // Importa el componente OpcionPostula desde la carpeta "pantallas"
import { useState } from 'react';

export default function MiComponente() {
  const barColor = "#DF0808"; // Color de la barra de navegación y del botón
  const postulaButtonColor = "#DF0808"; // Color del botón "POSTULA AQUI"

  const [showOpcionPostula, setShowOpcionPostula] = useState(false);
  const [showBlankScreen, setShowBlankScreen] = useState(false);

  const handlePostulaClick = () => {
    setShowBlankScreen(true);

    // Después de 500ms, muestra el contenido de OpcionPostula
    setTimeout(() => {
      setShowOpcionPostula(true);
    }, 500);
  };

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: barColor }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Brigadistas de Concepcion
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Preguntas Frecuentes</Button>
        </Toolbar>
      </AppBar>

      <Grid container sx={{ height: 'calc(100vh - 64px)' }}>
        {/* Lado Izquierdo */}
        <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          {showBlankScreen ? null : (
            <Box sx={{ textAlign: 'center', mb: 40 }}>
              <Typography variant="h2" component="div" sx={{mb:20, color: '#000000' }}>
                ¡Postula ahora!
              </Typography>
              {/* Usa la función handlePostulaClick cuando hagas clic en el botón */}
              <Button variant="contained" color="primary" size="large" sx={{ backgroundColor: postulaButtonColor, mt: 2 }} onClick={handlePostulaClick}>
                POSTULA AQUI
              </Button>
            </Box>
          )}
          {/* Renderiza OpcionPostula si showOpcionPostula es verdadero */}
          {showOpcionPostula && <OpcionPostula />}
        </Grid>

        {/* Lado Derecho */}
        <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={bomberoSvg} alt="Bombero" style={{ width: '100%', maxWidth: '400px' }} />
        </Grid>
      </Grid>
    </Box>
  );
}
