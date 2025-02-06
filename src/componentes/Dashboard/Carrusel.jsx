import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../estilos/Carrusel.css';
import Slider from "react-slick";
import TarjetaTienda from "./TarjetaTienda";
import bogota from '../../imagenes/Tiendas/Bogota.jpg';
import quibdo from '../../imagenes/Tiendas/Quibdo.jpg';
import barranquilla from '../../imagenes/Tiendas/Barranquilla.jpg';
import medellin from '../../imagenes/Tiendas/Medellin.jpg';


function Carrusel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="slider-container">
            <Slider {...settings} className="slider">

                <TarjetaTienda imagen={bogota} nombre={'Bogotá'} ubicacion={'Calle 128c # 53c - 22'} className='tarjeta-tienda'></TarjetaTienda>

                <TarjetaTienda imagen={quibdo} nombre={'Quibdó'} ubicacion={'Calle 23 # 4 - 5'} className='tarjeta-tienda'></TarjetaTienda>

                <TarjetaTienda imagen={barranquilla} nombre={'Barranquilla'} ubicacion={'Carrera 25 # 34b - 5'}></TarjetaTienda>

                <TarjetaTienda imagen={medellin} nombre={'Medellín'} ubicacion={'Carrera 46 # 53 - 51'}></TarjetaTienda>

            </Slider>
        </div>
    );
}

export default Carrusel;