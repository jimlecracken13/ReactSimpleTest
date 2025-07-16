import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList"
import React from "react";
function App() {
  return (
    <React.Fragment>
      <Banner />
      <ShoppingList/>
      <Cart />
    </React.Fragment>
    
  );
}

export default App;
