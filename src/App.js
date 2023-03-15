import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Item from "./pages/Item";
import Cart from "./pages/Cart";

import Navigation from "./components/Navigation";

import { CartCrudContextProvider } from "./context/CartContext";

function App() {
  return (
    <div className="w-4/5 mx-auto">
      <BrowserRouter>
        <CartCrudContextProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/items" element={<Items />}></Route>
            <Route path="/items/:id" element={<Item />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </CartCrudContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
