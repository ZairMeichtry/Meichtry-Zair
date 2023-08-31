import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
  <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a nuestra tienda" />} />
  <Route path="/category/:category" element={<ItemListContainer />} />
  <Route path="/product/:productId" element={<ItemDetailContainer />} />
</Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
