import React from "react";
import Header from "../Header";
import '../../estilos/Catalogo.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../estilos/Carrusel.css';
import CarruselProductos from "./CarruselProductos";
import imagenEjemplo from '../../imagenes/imagenEjemploProducto.jpg';
import TarjetaProducto from "./TarjetaProducto";
import { useEffect } from "react";
import { useState } from "react";

/**/
const Catalogo = () => {

const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://backend-vercel-lime.vercel.app/producto/consultar2')
            .then(response => response.json())
            .then(data => setProductos(data.productos))
            .catch(error => {
                console.log('Salio mal');
                console.log(error);
            });
    }, []);

    return (
        <div className="cuerpoCatalogo">
            <Header />
            <h1>Catálogo de productos</h1>

            <CarruselProductos>
                {productos.map((producto) => (
                    <TarjetaProducto
                        key={producto.idproducto}
                        id = {producto.idproducto}
                        imagen={imagenEjemplo}
                        nombre={producto.nombreproducto}
                        descripcion={'descripcion'}
                        precio={producto.ultimoprecio}
                    />
                ))}
            </CarruselProductos>
        </div>
    );
};

export default Catalogo;