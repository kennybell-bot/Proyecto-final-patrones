import React from "react";
import '../estilos/TarjetaProducto.css';

function TarjetaProducto({imagen, nombre , descripcion, precio}) {
    return (
        <div className="tarjetaProducto">
            <img src={imagen} alt={nombre} className="imagenProducto"/>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <button className="botonComprar">Comprar</button>
        </div>
    );
}

export default TarjetaProducto;