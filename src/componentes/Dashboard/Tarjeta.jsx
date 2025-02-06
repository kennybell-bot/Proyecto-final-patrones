import React from "react";
import '../../estilos/Tarjeta.css';

function Tarjeta({imagen, titulo, descripcion}){

    return(
        <div className="borde">
            <div className="tarjeta">
                <img src={imagen} className="imagen" alt="imagen"/>
                <div className="seccionTexto">
                    <h2>{titulo}</h2>
                    <p>{descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default Tarjeta;