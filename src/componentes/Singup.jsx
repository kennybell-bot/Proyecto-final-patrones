import React, { useState } from 'react';
import axios from 'axios';
import '../estilos/Singup.css';
import Modal from './Modal';
import { GiColumnVase } from "react-icons/gi";

const Signup = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [direccion, setDireccion] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Guardar el nombre del usuario en sessionStorage
        sessionStorage.setItem('nombreUsuario', nombre);
        setIsModalOpen(true);
    };

    const handleVerify = async (codigo) => {
        try {
            const response = await axios.post('https://backend-vercel-lime.vercel.app/registrar/cliente', {
                nombre,
                email,
                direccion,
                contrasena,
                codigo
            });
            setMensaje('Registro exitoso');
        } catch (error) {
            setMensaje('Error en el registro');
        }
    };

    return (
        <div className="signup-container">

            <form onSubmit={handleSubmit}>
                <div className="form-group">

                    <h1>Bienvenido</h1>
                    <GiColumnVase className='logoTipo'/>
                    <p>Nos alegra que seas parte de nosotros</p>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div> 
                <div className="form-group">
                    <div>
                        <label htmlFor="email">Email</label>
                    </div>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <div>
                        <label htmlFor="direccion">Dirección de Residencia</label>
                    </div>
                    <input
                        type="text"
                        id="direccion"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <div>
                        <label htmlFor="contrasena">Contraseña</label>
                    </div>
                    <input
                        type="password"
                        id="contrasena"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn-registrar">Registrar</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onSubmit={handleVerify} 
            />
        </div>
    );
};

export default Signup;