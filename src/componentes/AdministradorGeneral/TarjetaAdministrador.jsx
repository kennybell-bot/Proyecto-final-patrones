import React from "react";

function TarjetaAdministrador({imagen, texto}) {
    return (
        <div className="tarjetaAdministrador">
            <p>{texto}</p>
        </div>
    );
}

export default TarjetaAdministrador;