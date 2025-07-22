import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList"
import Footer from "./Footer";
import React, { useState } from "react";
function App() {
  const [cart, updateCart]= useState([])
  return (
    <>
      <Banner />
      <ShoppingList cart={cart} updateCart={updateCart}/>
      <Cart cart={cart} updateCart={updateCart}/>
      <Footer></Footer>
    </>
  );
}

export default App;
