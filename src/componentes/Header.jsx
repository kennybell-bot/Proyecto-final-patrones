import React from "react";
import '../estilos/Header.css';
import Boton from '../componentes/Boton';
import logotipo from '../imagenes/Artesanias.png';
import { FaShoppingCart } from "react-icons/fa";

function Header({counter}){
    return(
        <div className="header">
            <img src={logotipo} alt="Logotipo tienda" className='logotipoTienda'/>
            <Boton>Inicio</Boton>
            <Boton>Tiendas</Boton>
            <Boton>Catálogo</Boton>
            <Boton>Ingresar</Boton>
            <Boton>Registrarse</Boton>
            <Boton className="boton-carrito"><span>{counter}</span><FaShoppingCart /></Boton>
        </div>
    )
}

export default Header;