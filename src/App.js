import ItemDetailConatiner from "./Components/ItemDetailConatiner";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import './main.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { CartProvider } from "./Context/CartContext";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";


function App() {

  return (
    <div>
      <CartProvider>

      <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailConatiner />}/>
        <Route path="/:category" element={<ItemListContainer />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element= {<Checkout />}/>
        
      </Routes>

      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
