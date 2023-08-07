// Routes.js
import { Route, Switch, Redirect } from 'react-router-dom';
import MiComponente from './MiComponente';
import OpcionPostula from './OpcionPostula';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MiComponente} />
      <Route path="/opcion-postula" component={OpcionPostula} />
      {/* Puedes agregar otras rutas aquí si es necesario */}
      <Redirect to="/" /> {/* Redirige a la página de inicio (MiComponente) por defecto */}
      <Redirect to="/OpcionPostula" />
    </Switch>
  );
};

export default Routes;
