import React , { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../estilos/Header.css';
import Boton from '../componentes/Boton';
import logotipo from '../imagenes/Artesanias.png';
import { FaShoppingCart } from "react-icons/fa";
import { GiColumnVase } from "react-icons/gi";


function Header() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const storedCounter = sessionStorage.getItem('counter');
        if (storedCounter) {
            setCounter(parseInt(storedCounter));
        }
    }, []);

    return (
        <div className="header">
            <GiColumnVase className="logotipoTienda"/>
            <Link to={"/Home"}><Boton>Inicio</Boton></Link>
            
            <Link to="/Catalogo"><Boton>Catálogo</Boton></Link>
            <Link to="/Login"><Boton>Ingresar</Boton></Link>
            <Link to="/Singup">
                <Boton>Registrarse</Boton>
            </Link>
            <Link to='/carrito'>
                <Boton className="boton-carrito">
                    {counter !== 0 && <span>{counter}</span>}
                    <FaShoppingCart />
                </Boton>
            </Link>
        </div>
    );
}

export default Header;