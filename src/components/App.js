import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList"
import Footer from "./Footer";
import Categories from "./Categories";
import { useEffect,useState } from "react";

function App() {
  let cartKey = "cart"
  const [cart, updateCart]= useState(()=>{
     return localStorage.getItem(cartKey) ?
    JSON.parse(localStorage.getItem(cartKey)):[] 
  })
  const [category, setCategory]=useState("")
  //on sauvegarde le pannier
  
  useEffect(()=>{
    let cartJson = JSON.stringify(cart)
    localStorage.setItem(cartKey,cartJson)
  },[cart])
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
