import React, { useEffect, useState } from "react";
import Header from "../Header";
import "../../estilos/Catalogo.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../estilos/Carrusel.css";
import CarruselProductos from "./CarruselProductos";
import imagenEjemplo from "../../imagenes/imagenEjemploProducto.jpg";
import TarjetaProducto from "./TarjetaProducto";

const Catalogo = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("https://backend-vercel-lime.vercel.app/producto/consultar2")
            .then((response) => response.json())
            .then((data) => setProductos(data.productos))
            .catch((error) => {
                console.error("Error al obtener productos:", error);
            });
    }, []);

    return (
        <div className="cuerpoCatalogo">
            <Header />
            <h1>Catálogo de productos</h1>

            <CarruselProductos>
                {productos.map((producto) => {
                    const imagenProducto = producto.image
                        ? `${producto.image}` // Ruta completa si el backend envía una relativa
                        : imagenEjemplo; // Imagen por defecto si no hay imagen
                        console.log(producto.image);

                    return (
                        <TarjetaProducto
                            key={producto.idproducto}
                            id={producto.idproducto}
                            imagen={imagenProducto}
                            nombre={producto.nombreproducto}
                            descripcion={producto.descripcion || "Sin descripción"} // Usa la descripción del producto si está disponible
                            precio={producto.ultimoprecio}
                        />

                    );
                })}
            </CarruselProductos>
        </div>
    );
};
 
export default Catalogo;