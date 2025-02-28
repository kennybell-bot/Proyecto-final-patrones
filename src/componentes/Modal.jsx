import React, { useState } from 'react';
import axios from 'axios';
import '../estilos/Modal.css';

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [codigo, setCodigo] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async () => {
        const nombreUsuario = sessionStorage.getItem('nombreUsuario');
        const data = {
            usuario: nombreUsuario,
            codigoActivacion: codigo
        };

        try {
            const response = await axios.put('https://back-artesanias-vue.vercel.app/Registrar/Cliente/Activar', data);
            console.log('Registro exitoso:', response.data);
            onSubmit(codigo);
            onClose();
        } catch (error) {
            console.error('Error en el registro:', error);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Ingrese su código de verificación</h2>
                <input
                    type="text"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    placeholder="Código de verificación"
                />
                <button onClick={handleSubmit}>Enviar</button>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default Modal;