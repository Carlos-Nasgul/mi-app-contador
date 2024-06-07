import React from "react";

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
      className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"} //Doy una condicón a una clase
      onClick={manejarClic} //<--Event Listener, se va encargar de la lógica al pulsar el botón
    >
      {texto}
    </button>
  );
}

export default Boton;
