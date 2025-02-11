import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../../estilos/Login.css';
import { useState } from "react";
import { GiColumnVase } from "react-icons/gi";

function Login() {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mensaje, setMensaje] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        let data = JSON.stringify({
            "usuario": usuario,
            "contrasena": contrasena
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://back-artesanias-vue.vercel.app/Login',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios.request(config)
        .then((response) => {
            const idusuario = response.data.idrol;
            const nombreUsuario = response.data.nombre; // Suponiendo que el nombre del usuario viene en la respuesta
            if (idusuario) {
                // Guarda los datos del usuario en sessionStorage
                sessionStorage.setItem('usuario', JSON.stringify(response.data));
                sessionStorage.setItem('nombreUsuario', usuario); // Guarda el nombre del usuario en sessionStorage

                // Redirige a una página específica basada en el idusuario
                if (idusuario === 3) {
                    window.location.href = 'https://angie-front-seven.vercel.app/';
                } else if (idusuario === 1) {
                    navigate('/Catalogo');
                } else {
                    navigate('/Login');
                }
            } else {
                // Maneja el error de autenticación
                console.log('Error de autenticación');
                setMensaje('Error de autenticación');
            }
        })
        .catch((error) => {
            console.log(error);
            setMensaje('Error en la solicitud');
        });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <div className="login">
            <div className="borde-estatico">
                <div className="login-form">
                    <h1>Bienvenido</h1>
                    <GiColumnVase className='logotipoLogin'/>
                    <label htmlFor="usuario">
                        Usuario
                    </label>
                    <input 
                        type="text" 
                        id="usuario" 
                        className="input" 
                        value={usuario} 
                        onChange={(e) => setUsuario(e.target.value)} 
                    />
                    <label htmlFor="contrasena">
                        Contraseña
                    </label>
                    <input 
                        type="password" 
                        id="contrasena" 
                        className="input" 
                        value={contrasena} 
                        onChange={(e) => setContrasena(e.target.value)} 
                        onKeyDown={handleKeyDown} // Agregar manejador de eventos onKeyDown
                    />
                    <button onClick={handleLogin} className="botonLogin">Iniciar Sesión</button>
                    <a href="https://angie-front-seven.vercel.app">¿Eres administrador?</a>
                    <p>{mensaje}</p>
                </div>
            </div>
        </div>
    );
}

export default Login;