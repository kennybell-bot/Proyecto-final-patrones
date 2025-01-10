import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Body from './componentes/Body';

var productCounter = 25

function App() {
  return (
    <div className="App">
      <Header counter={productCounter}/>
      <Body/>
    </div>
  );
}

export default App;
