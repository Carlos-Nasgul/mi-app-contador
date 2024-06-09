import React from "react";
import "../estilos-componentes/Contador.css";

class Contador extends React.Component {
  render() {
    return <div className="marcador">{this.props.numClics}</div>;
  }
}

//function Contador({ numClics }) {}

export default Contador;
