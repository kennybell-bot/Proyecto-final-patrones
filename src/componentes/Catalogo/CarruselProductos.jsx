import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../estilos/Carrusel.css';


function CarruselProductos(props) {

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
                {props.children}
            </Slider>
        </div>
    );

}

export default CarruselProductos;