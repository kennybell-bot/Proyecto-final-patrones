import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header';
import Body from './componentes/Dashboard/Body';
import Login from './componentes/Login/Login';
import Catalogo from './componentes/Catalogo/Catalogo';
import Carrito from './componentes/CarritoDeCompras/Carrito'; 
import OrdersStore from './componentes/AdministradorGeneral/OrdersStore';
import AdministradorGeneral from './componentes/AdministradorGeneral/AdministradorGeneral';
import Billing from './componentes/Tienda/Billing';
import HomeStore from './componentes/Tienda/HomeStore';

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
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/client/home" element={<ClientHome />} />
          <Route path="/store/home" element={<StoreHome />} />
          <Route path="/store/inventory" element={<Inventory />} />
          <Route path="/store/ordersstore" element={<OrdersStore />} />
          <Route path="/store/billing" element={<Billing />} />
          {/*<Route path="/store/storestats" element={<StoreStats />} />*/}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
