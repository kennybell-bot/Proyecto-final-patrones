import React, { useState, useEffect } from 'react';
import ProductCardAdmin from './ProductCardAdmin';

const Stats = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('https://backend-vercel-lime.vercel.app/producto/consultar');
        const data = await response.json();
        
        // Mapeamos los datos del backend al formato esperado
        const productosTransformados = data.map((producto, index) => ({
          id: index + 1, // Generamos un ID único
          nombre: producto.name,
          ventas: parseInt(producto.sold, 10),
        }));

        setProductos(productosTransformados);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  const productosOrdenados = [...productos].sort((a, b) => b.ventas - a.ventas);

  return (
    <div>
      <h1>Estadísticas de Productos</h1>
      {loading ? (
        <p>Cargando estadísticas...</p>
      ) : (
        <div>
          {productosOrdenados.map((producto) => (
            <ProductCardAdmin key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Stats;