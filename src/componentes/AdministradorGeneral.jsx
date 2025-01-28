import React, { useEffect, useState } from "react";
import Header from "./Header";
import '../estilos/Catalogo.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../estilos/Carrusel.css';
import CarruselProductos from "./CarruselProductos";
import imagenEjemplo from '../imagenes/imagenEjemploProducto.jpg';
import TarjetaProducto from "./TarjetaProducto";
import axios from 'axios';

const Catalogo = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Fetch de datos directamente como un array
        axios.get('https://backend-vercel-lime.vercel.app/producto/consultar2')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setProductos(response.data); // Guardar directamente el array
                } else {
                    console.error('Formato inesperado en la respuesta:', response.data);
                    productos = Array.isArray(response.data) 
                    ? response.data 
                    : Object.values(response.data);
                
                    console.log('Productos mapeados:', productos);
                    productos.map((producto, index) => console.log('Producto ${index}:', producto));
                }
            })
            .catch(error => {
                console.log('Error al realizar el fetch:', error);
            });
    }, []);

    return (
        <div className="cuerpoCatalogo">
            <Header />
            <h1>Catálogo de productos</h1>

            {/* Tabla de productos */}
            <div style={{ margin: '20px auto', width: '80%' }}>
                <h2>Tabla de Productos</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f4f4f4', borderBottom: '2px solid #ddd' }}>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>ID Producto</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Nombre del Producto</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(producto => (
                            <tr key={producto.idProducto} style={{ borderBottom: '1px solid #ddd' }}>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{producto.idProducto}</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{producto.nombreProducto}</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{producto.cantidad}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Catalogo;