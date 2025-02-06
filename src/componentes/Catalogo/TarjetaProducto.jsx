import React from "react";
import '../../estilos/TarjetaProducto.css';

function TarjetaProducto({id, imagen, nombre , descripcion, precio}) {
    const handleComprar = () => {
        // Manejar el contador
        let counter = sessionStorage.getItem('counter');
        if (counter) {
            counter = parseInt(counter) + 1;
        } else {
            counter = 1; // Inicializar en 1 en lugar de 0
        }
        sessionStorage.setItem('counter', counter);

        // Manejar el array de productos
        let productos = sessionStorage.getItem('productos');
        if (productos) {
            productos = JSON.parse(productos);
        } else {
            productos = [];
        }
        productos.push(id);
        sessionStorage.setItem('productos', JSON.stringify(productos));
    };

    return (
        <div className="tarjetaProducto">
            <img src={imagen} alt={nombre} className="imagenProducto"/>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <button className="botonComprar" onClick={handleComprar}>Comprar</button>
        </div>
    );
}

export default TarjetaProducto;