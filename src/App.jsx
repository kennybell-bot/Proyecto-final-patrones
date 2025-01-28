import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header';
import Body from './componentes/Body';
import Login from './componentes/Login';
import Catalogo from './componentes/Catalogo';


var productCounter = 12;

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header counter={productCounter}/>
        <Routes>
          <Route index element={<Body/>}/>
          <Route path='/home' element={<Body/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/catalogo" element={<Catalogo/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
