import "./App.css";
import "./estilos-componentes/Botones.css";
import Boton from "./componentes/Boton";
import fotoPortada from "./imagenes/FotoFaceHacker.jpg";
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const usarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciaContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="Logo-portada">
        <img
          className="foto-portada"
          src={fotoPortada}
          alt="Foto de un hacker oculto"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={usarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciaContador}
        />
      </div>
    </div>
  );
}

export default App;
