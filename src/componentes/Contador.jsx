import React from "react";
import "../estilos-componentes/Contador.css";

function Contador({ numClics }) {
  return <div className="marcador">{numClics}</div>;
}

export default Contador;
