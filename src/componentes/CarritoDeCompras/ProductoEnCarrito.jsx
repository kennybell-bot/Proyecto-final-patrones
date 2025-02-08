import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import "../../estilos/ProductoEnCarrito.css";

function ProductoEnCarrito({ id, iamgen, nombre, precio, onEliminar }) {
    return (
        <div className="productoEnCarrito">
            <img src={iamgen} alt="Imagen del producto" />
            <h2>{nombre}</h2>
            <p>{precio}</p>
            <button className="botonEliminar" onClick={() => onEliminar(id)}>
                <FaRegTrashAlt />
            </button>
        </div>
    );
}

export default ProductoEnCarrito;