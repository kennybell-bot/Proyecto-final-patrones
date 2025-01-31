import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Boton from "./Boton";
import "../estilos/ProductoEnCarrito.css";

function ProductoEnCarrito({id, iamgen, nombre, precio}) {
    return (
        <div className="productoEnCarrito">
            <img src={iamgen} alt="Imagen del producto" />
            <h3>{nombre}</h3>
            <p>{precio}</p>
            <Boton>
                <FaRegTrashAlt />
            </Boton>
        </div>
    );
}

export default ProductoEnCarrito;