import React, { useEffect, useState } from "react";
import Header from "../Header";
import Inventory from "./Inventory";
import StoreStats from "./StoreStats";
import OrdersStore from "./OrdersStore";
import '../../estilos/Catalogo.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../estilos/Carrusel.css';


const Catalogo = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Fetch de datos directamente como un array
        fetch('https://backend-vercel-lime.vercel.app/producto/consultar2')
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
            <h1>Admin supremo supremisimo</h1>
            <StoreStats></StoreStats>
            <Inventory></Inventory>
            <OrdersStore></OrdersStore>
        </div>
    );
};

export default Catalogo;