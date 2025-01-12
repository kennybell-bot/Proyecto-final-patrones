import React from "react";
import '../estilos/TarjetaTienda.css';

function TarjetaTienda({imagen, nombre, ubicacion}){
    return(
        <div className="tarjeta-tienda">
            <img src={imagen} alt="imagen-tienda" className="imagen-tienda"></img>
            <h2>{nombre}</h2>
            <p>{ubicacion}</p>
        </div>
    )
}

export default TarjetaTienda;