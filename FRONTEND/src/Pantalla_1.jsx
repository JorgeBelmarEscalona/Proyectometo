import './Pantalla_1.css';

// Componente JSX
function MiComponente() {
  return (
    <div className="barraSuperior">
      <div className="Brigadas_de_conce">
        <h1>Brigadas de Concepción</h1>
      </div>
      <div className="Postulaaqui">
          ¡Postula Ahora!
      </div>

      <div className="opciones">
        <button className="login">Login</button>
        <button className="preguntasfrecuentes">Preguntas Frecuentes</button>
        <button className="postula">Postula</button>
        <img src="bombero.svg" style="float: right; width: 100px; height: 100px;"></img>
      </div>
    </div>
  );
}

export default MiComponente;