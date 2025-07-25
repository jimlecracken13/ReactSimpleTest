import { useState } from "react";
import "../styles/Cart.css";


const Cart = ({ cart, updateCart }) => {
  const [isOpen, setIsOpen] = useState(true);

  let total = cart.reduce((acc, plant)=>acc + plant.price * plant.amont, 0)
 
  return isOpen ? (
    <div className="lmj-cart">
      <h2>Panier</h2>
      <button
        onClick={() => setIsOpen(false)}
        className="lmj-cart-toggle-button"
      >
        Fermer le panier
      </button>
      <ul>
        {cart.map((plant) => (
          <li key={`${plant.id}`}>
            {plant.name} prix:{plant.price} quantité:{plant.amont}
          </li>
        ))}
      </ul>
      <h3>{total}</h3>
      <button onClick={() => updateCart([])}>Vider le panier</button>

    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        onClick={() => setIsOpen(true)}
        className="lmj-cart-toggle-button"
      >
        Ouvrir le panier
      </button>
    </div>
  );
};

export default Cart;
