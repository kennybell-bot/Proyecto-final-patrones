import '../../estilos/Collage.css';
import img1 from '../../imagenes/Collage/imagenCollage1.jpg';
import img2 from '../../imagenes/Collage/imagenCollage2.jpg';
import img3 from '../../imagenes/Collage/imagenCollage3.jpg';
import img4 from '../../imagenes/Collage/imagenCollage4.jpg';
import img5 from '../../imagenes/Collage/imagenCollage5.jpg';
import img6 from '../../imagenes/Collage/imagenCollage6.jpg';
import img7 from '../../imagenes/Collage/imagenCollage7.jpg';
import img8 from '../../imagenes/Collage/imagenCollage8.jpg';
import img9 from '../../imagenes/Collage/imagenCollage9.jpg';
import img10 from '../../imagenes/Collage/imagenCollage10.jpg';  


function Collage() {
    return (
        <div className='collage'>
            <img src={img1} className="imagContainer img1" alt="Imagen del collage"/>
            <img src={img2} alt="Bandera de Colombia" className="imagContainer img2"/>
            <img src={img3} alt="Imagen del collage" className="imagContainer img3"/>
            <img src={img4} alt="Imagen del collage" className="imagContainer img4"/>
            <img src={img5} alt="Bandera de Bogotá" className="imagContainer img5"/>
            <img src={img6} className="imagContainer img6" alt="Imagen del collage"/>
            <img src={img7} alt="Imagen del collage" className="imagContainer img7"/>
            <img src={img8} alt="" className="imagContainer img8"/>
            <img src={img9} alt="Imgen del collage" className="imagContainer img9"/>
            <img src={img10} alt="Imagen collge" className="imagContainer img10"/>
        </div>
    );
}

export default Collage;