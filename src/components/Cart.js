import { useState } from "react";
import "../styles/Cart.css";
const Cart = ({cart, updateCart}) => {
  const [isOpen, setIsOpen] = useState(true)
  const monsteraPrice = 8; 
  return isOpen ? (
    <div className="lmj-cart">
      <h2>Panier</h2>
      <button onClick={() => setIsOpen(false)}
        className='lmj-cart-toggle-button'>Fermer le panier</button>
      <ul>
        <li>Monstera : {monsteraPrice}€</li>
      </ul>
      Total : {monsteraPrice * cart}$
      <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
      <button onClick={()=> updateCart(0)}>Vider le panier</button>
    </div>
  ): (
        <div className='lmj-cart-closed'>
            <button onClick={()=>setIsOpen(true)}
            className='lmj-cart-toggle-button'
            >Ouvrir le panier</button>
        </div>
          
      
  )
};

export default Cart;
