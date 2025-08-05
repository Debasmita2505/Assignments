import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <div className="app">
      <header>
        <h1>🛍️ React Shop</h1>
        <Cart cartItems={cartItems} />
      </header>

      <main>
        <ProductList addToCart={addToCart} />
      </main>
    </div>
  );
}

export default App;
