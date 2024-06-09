import React from "react";
import "./App.css";
import "./estilos-componentes/Botones.css";
import Boton from "./componentes/Boton";
import fotoPortada from "./imagenes/FotoFaceHacker.jpg";
import Contador from "./componentes/Contador";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClics: 0,
    };
    this.usarClic = this.manejarClic.bind(this);
    this.reiniciaContador = this.reiniciaContador.bind(this);
  }

  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }

  reiniciaContador() {
    this.setState({ numClics: 0 });
  }

  render() {
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
          <Contador numClics={this.state.numClics} />
          <Boton
            texto="Clic"
            esBotonDeClic={true}
            manejarClic={this.usarClic}
          />
          <Boton
            texto="Reiniciar"
            esBotonDeClic={false}
            manejarClic={this.reiniciaContador}
          />
        </div>
      </div>
    );
  }
}

//function App() {}
//const [numClics, setNumClics] = useState(0);

//const usarClic = () => {
// setNumClics(numClics + 1);
//};

//const reiniciaContador = () => {
//setNumClics(0);
//};

export default App;
