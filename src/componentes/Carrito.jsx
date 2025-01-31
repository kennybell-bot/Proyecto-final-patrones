import React from "react";
import Boton from "./Boton";
import ProductoEnCarrito from "./ProductoEnCarrito";
import iamgenProcucto from "../imagenes/imagenEjemploProducto.jpg";
import "../estilos/CarritoDeCompras.css";

function Carrito() {

    let precio = 'El chiquito';

    return (
        <div className="carritoDeCompras">
            <h1>Carrito de Compras</h1>
            <div className="seccionProductosCarrito">
                <ProductoEnCarrito iamgen={iamgenProcucto} nombre='Consolador xl' precio={'El chiquito'}></ProductoEnCarrito>
                <ProductoEnCarrito iamgen={iamgenProcucto} nombre='Consolador xl' precio={'El chiquito'}></ProductoEnCarrito>
                <ProductoEnCarrito iamgen={iamgenProcucto} nombre='Consolador xl' precio={'El chiquito'}></ProductoEnCarrito>
            </div>
            <div className="seccionTotal">
                <h2>Total</h2>
                <p>{precio}</p>
            </div>
            <Boton className='botonPagar'>Pagar</Boton>
        </div>
    );
}

export default Carrito;