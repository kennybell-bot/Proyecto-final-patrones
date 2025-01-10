import React from "react";
import '../estilos/Boton.css';

function Boton( props ){
    return(
    <button>
        {props.children}
    </button>
    );
};

export default Boton;