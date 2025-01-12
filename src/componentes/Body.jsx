import React from "react";
import '../estilos/Body.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tarjeta from "./Tarjeta";
import Carrusel from "./Carrusel";
import andina from '../imagenes/andina.jpg';
import amazonzas from '../imagenes/amazonas.jpg';
import llanos from '../imagenes/llanos.jpg';
import caribe from '../imagenes/caribe.jpg';
import pacifico from '../imagenes/Pacifico.jpg';

function Body(){
    return(
        <div className="cuerpo">
            <h1>Colombia en sus artesanías</h1>

            <Tarjeta imagen={andina} titulo={'Región Andina'} descripcion={'La región andina de Colombia es un impresionante mosaico de paisajes montañosos, donde las altas cumbres de los Andes se mezclan con valles fértiles y ciudades vibrantes. Esta región, conocida por su clima diverso y su riqueza cultural, es el corazón de las tradiciones y festividades colombianas. Las comunidades que habitan estas tierras han perfeccionado el arte de la creación artesanal, produciendo desde tejidos coloridos hasta joyería elaborada, cada pieza reflejando la historia y el espíritu de los Andes. Explorar las artesanías de la región andina es descubrir la esencia de Colombia a través de la habilidad y el arte de sus artesanos.'}></Tarjeta>

            <Tarjeta imagen={amazonzas} titulo={'Región Amazónica'} descripcion={'La región amazónica de Colombia es un vasto y exuberante paraíso verde, hogar de una biodiversidad inigualable y culturas ancestrales vibrantes. Este pulmón del planeta, que abarca ríos majestuosos y selvas interminables, es el refugio de numerosas especies de flora y fauna únicas. Las comunidades indígenas que habitan esta región, guardianes de conocimientos milenarios, viven en armonía con la naturaleza, creando artesanías que reflejan su profundo respeto por el entorno natural y su rica herencia cultural. Visitar la Amazonía colombiana es sumergirse en un mundo de asombrosa belleza y tradición'}></Tarjeta>

            <Tarjeta imagen={llanos} titulo={'Región Llanera'} descripcion={'Los Llanos Orientales de Colombia son una vasta extensión de sabanas y praderas que se extienden hasta donde alcanza la vista, bañadas por caudalosos ríos y adornadas por majestuosos amaneceres y atardeceres. Esta región es conocida por su rica tradición ganadera y agrícola, así como por su vibrante cultura llanera, donde la música y el baile del joropo cobran vida. Las comunidades locales son expertas en la creación de artesanías que capturan la esencia de su entorno natural y su herencia cultural. Desde sombreros tejidos a mano hasta intrincadas cestas y decoraciones de cuero, cada pieza es un testimonio del ingenio y la dedicación de los artesanos llaneros, reflejando la belleza y la autenticidad de esta región única.'}></Tarjeta>

            <Tarjeta imagen={caribe} titulo={'Región Caribe'} descripcion={'La región Caribe de Colombia es una tierra vibrante y diversa, famosa por su rica herencia cultural y sus paisajes impresionantes. Enclavada a lo largo de la costa norte del país, esta región alberga ciudades icónicas como Cartagena, Santa Marta y Barranquilla, cada una con su propio encanto histórico y cultural. La artesanía caribeña refleja la fusión de tradiciones indígenas, africanas y españolas, dando lugar a creaciones únicas y coloridas. Desde tejidos y sombreros vueltiaos hasta joyería elaborada con conchas y corales, las artesanías del Caribe colombiano capturan la esencia y el espíritu de su gente y sus tradiciones.'}></Tarjeta>

            <Tarjeta imagen={pacifico} titulo={'Región pacífica'} descripcion={'La región Pacífica de Colombia es un tesoro natural y cultural, ubicada a lo largo de la costa del Océano Pacífico. Esta región se destaca por su exuberante biodiversidad, con selvas tropicales, manglares y una rica vida marina. Además, es un crisol de culturas, con una fuerte presencia de comunidades afrocolombianas e indígenas que han preservado sus tradiciones y artesanías únicas a lo largo de los siglos. Las artesanías del Pacífico Colombiano son una expresión de su identidad, combinando técnicas ancestrales con materiales naturales de la región, como fibras vegetales, madera y cerámica. Cada pieza artesanal cuenta una historia de resiliencia y conexión profunda con la naturaleza.'}></Tarjeta>

            <h1>Nuestras tiendas</h1>

            <Carrusel></Carrusel>
        </div>
    )
}

export default Body;