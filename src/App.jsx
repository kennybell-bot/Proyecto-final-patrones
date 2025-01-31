import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header';
import Body from './componentes/Body';
import Login from './componentes/Login';
import Catalogo from './componentes/Catalogo';
import Carrito from './componentes/Carrito'; 
import AdministradorGeneral from './componentes/AdministradorGeneral';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Body/>}/>
          <Route path='/home' element={<Body/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/catalogo" element={<Catalogo/>}/>
          <Route path="/administradorGeneral" element={<AdministradorGeneral/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
