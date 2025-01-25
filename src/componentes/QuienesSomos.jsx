import react from 'react';
import logotipo from '../imagenes/Artesanias.png';
import '../estilos/QuienesSomos.css';

function QuienesSomos() {
    return (
        <div className='quienesSomos'>
            <img src={logotipo} alt="Logotipo Artesanias Bogota" className='logo-tienda'/>
            <div className='seccionMisionVision'>
                <div className='tarjetaMisionVision'>
                    <h2>Misión</h2>
                    <p>En Artesanías Bogotá, nos dedicamos a preservar y promover la rica tradición artesanal colombiana, creando un espacio donde la autenticidad, la calidad y la creatividad se unen para ofrecer productos únicos y sostenibles. Nuestro compromiso es apoyar a los artesanos locales, valorando su talento y esfuerzo, y proporcionando a nuestros clientes piezas excepcionales que cuenten historias y conecten culturas.</p>
                    </div>
                <div className='tarjetaMisionVision'>
                    <h2>Visión</h2>
                    <p>En 2026, Artesanías Bogotá se consolidará como el referente líder en la promoción y venta de productos artesanales de alta calidad, reconocida por su compromiso con la sostenibilidad y la preservación del patrimonio cultural colombiano. Aspiramos a ser un puente entre los artesanos y el mundo, llevando sus historias y tradiciones a través de nuestras piezas únicas, y fomentando un consumo consciente y respetuoso. Buscamos inspirar a nuevas generaciones a valorar y mantener viva la rica herencia artesanal de Colombia.</p>
                </div>
            </div>
        </div>
    );
}

export default QuienesSomos;