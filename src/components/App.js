import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList"
import Footer from "./Footer";
import Categories from "./Categories";
import { useState } from "react";
function App() {
  const [cart, updateCart]= useState([])
  const [categorie, setCategorie]=useState("classique")
  return (
    <>
      <Banner />
      <Categories categorie={categorie} setCategorie={setCategorie}/>
      <ShoppingList cart={cart} updateCart={updateCart} categorie={categorie}/>
      <Cart cart={cart} updateCart={updateCart}/>
      <Footer></Footer>
    </>
  );
}

export default App;
