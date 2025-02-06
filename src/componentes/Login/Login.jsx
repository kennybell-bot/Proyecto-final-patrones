import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../../estilos/Login.css';
import logotipo from '../../imagenes/Artesanias.png';
import { useState } from "react";

function Login() {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
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
            if (idusuario) {
                // Guarda los datos del usuario en sessionStorage
                sessionStorage.setItem('usuario', JSON.stringify(response.data));

                // Redirige a una página específica basada en el idusuario
                if (idusuario === 3) {
                    navigate('/administradorGeneral');
                } else if (idusuario === 1) {
                    navigate('/Catalogo');
                } else {
                    navigate('/Login');
                }
            } else {
                // Maneja el error de autenticación
                console.log('Error de autenticación');
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="login">
            <div className="borde-estatico">
                <div className="login-form">
                    <img src={logotipo} alt="Logotipo tienda" className='logotipoLogin'/>
                    <h1>Bienvenido</h1>
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
                    />
                    <button onClick={handleLogin} className="botonLogin">Iniciar Sesión</button>
                </div>
            </div>
        </div>
    );
}

export default Login;

/*
Para recuperar los datos del usuario almacenados en sessionStorage, se puede utilizar el siguiente código:
const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const usuarioData = sessionStorage.getItem('usuario');
        if (usuarioData) {
            setUsuario(JSON.parse(usuarioData));
        }
    }, []);
*/