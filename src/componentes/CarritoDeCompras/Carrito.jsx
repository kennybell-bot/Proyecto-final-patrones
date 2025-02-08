import React, { useEffect, useState } from "react";
import imagenProcucto from "../../imagenes/imagenEjemploProducto.jpg";
import "../../estilos/CarritoDeCompras.css";
import ProductoEnCarrito from "./ProductoEnCarrito";

function Carrito() {
    const [productos, setProductos] = useState([]);
    const [productosEnCarrito, setProductosEnCarrito] = useState([]);
    const [total, setTotal] = useState(0); // Estado para almacenar el total

    // Primer useEffect para obtener productos
    useEffect(() => {
        fetch('https://backend-vercel-lime.vercel.app/producto/consultar2')
            .then(response => response.json())
            .then(data => setProductos(data.productos))
            .catch(error => {
                console.log('Error al obtener productos:', error);
            });
    }, []);

    // Segundo useEffect para filtrar productos
    useEffect(() => {
        const productosEnSession = sessionStorage.getItem('productos');
        if (productosEnSession && productos.length > 0) {
            const idsEnCarrito = JSON.parse(productosEnSession);
            const productosFiltrados = productos.filter(producto => 
                idsEnCarrito.includes(producto.idproducto)
            );
            setProductosEnCarrito(productosFiltrados);
        }
    }, [productos]);

    // Tercer useEffect para calcular el total
    useEffect(() => {
        const totalCalculado = productosEnCarrito.reduce((sum, producto) => {
            const precio = Number(producto.ultimoprecio.replace('$', ''));
            return sum + (isNaN(precio) ? 0 : precio);
        }, 0);
        console.log("totalCalculado");
        setTotal(totalCalculado);
    }, [productosEnCarrito]);

    // Función para eliminar producto del carrito
    const eliminarProducto = (id) => {
        const nuevosProductosEnCarrito = productosEnCarrito.filter(producto => producto.idproducto !== id);
        setProductosEnCarrito(nuevosProductosEnCarrito);
        sessionStorage.setItem('productos', JSON.stringify(nuevosProductosEnCarrito.map(producto => producto.idproducto)));
    };

    return (
        <div className="carritoDeCompras">
            <h1>Carrito de Compras</h1>
            <div className="seccionProductosCarrito">
                {productosEnCarrito.map(producto => (
                    <ProductoEnCarrito
                        key={producto.idproducto}
                        id={producto.idproducto}
                        iamgen={producto.image || imagenProcucto}
                        nombre={producto.nombreproducto}
                        precio={producto.ultimoprecio}
                        onEliminar={eliminarProducto} // Pasar la función como prop
                    />
                ))}
            </div>
            <div className="seccionTotal">
                <h2>Total</h2>
                <p>${total.toFixed(2)}</p> 
            </div>
        </div>
    );
}

export default Carrito;