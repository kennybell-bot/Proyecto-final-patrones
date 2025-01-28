import React from "react";
import { Link } from 'react-router-dom';
import '../estilos/Header.css';
import Boton from '../componentes/Boton';
import logotipo from '../imagenes/Artesanias.png';
import { FaShoppingCart } from "react-icons/fa";

function Header({counter}){
    return(
        <div className="header">
            <img src={logotipo} alt="Logotipo tienda" className='logotipoTienda'/>
            <Link to={"/Home"}><Boton>Inicio</Boton></Link>
            <Boton>Tiendas</Boton>
            <Link to="/Catalogo"><Boton>Catálogo</Boton></Link>
            <Link to="/Login"><Boton>Ingresar</Boton></Link>
            <Boton>Registrarse</Boton>
            <Boton className="boton-carrito">{counter !== 0 && <span>{counter}</span>}<FaShoppingCart /></Boton>
        </div>
    )
}

export default Header;