import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Banner from "./components/Banner";
import "./App.css";


const App = () => {
  // Manage cart items in state
  const [cart, setCart] = useState([]);

  // to add an item in the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // to remove item from cart
  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  // Function to check whether cart has an item
  const isInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <div>
      <Header cartCount={cart.length} />
      <Banner />
      <List
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        isInCart={isInCart}
      />
      <Footer />
    </div>
  );
};

export default App;
