import React from "react";

class Boton extends React.Component {
  render() {
    return (
      <button
        className={this.props.esBotonDeClic ? "boton-clic" : "boton-reiniciar"} //Doy una condicón a una clase
        onClick={this.props.manejarClic} //<--Event Listener, se va encargar de la lógica al pulsar el botón
      >
        {this.props.texto}
      </button>
    );
  }
}

//function Boton({ texto, esBotonDeClic, manejarClic }) {}

export default Boton;
