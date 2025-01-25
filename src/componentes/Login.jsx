import React from "react";
import '../estilos/Login.css';
import logotipo from '../imagenes/Artesanias.png';

function Login(){
    return(
        <div className="login">
            <div className="borde-estatico">
                <div className="login-form">
                    <img src={logotipo} alt="Logotipo tienda" className='logotipoLogin'/>
                    <h1>Bienvenido</h1>
                    <label for="#usuario">
                        Usuario
                    </label>
                    <input type="text" id="usuario" className="input"/>
                    <label for="#contrasena">
                        Contraseña
                    </label>
                    <input type="password" id="contrasena" className="input"/>
                </div>
            </div>

        </div>
    )
}

export default Login;