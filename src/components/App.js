import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList"
import Footer from "./Footer";
import Categories from "./Categories";
import { useState } from "react";
function App() {
  const [cart, updateCart]= useState([])
  const [category, setCategory]=useState("")
  return (
    <>
      <Banner />
      <Categories category={category} setCategory={setCategory}/>
      <ShoppingList cart={cart} updateCart={updateCart} category={category}/>
      <Cart cart={cart} updateCart={updateCart}/>
      <Footer></Footer>
    </>
  );
}

export default App;
