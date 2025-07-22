import CareScale from "./CareScale";
import "../styles/PlantItems.css";

const PlantItems = ({ plant, cart, updateCart }) => {
  
  return (
    <li key={plant.id} className="lmj-plant-item">
      {plant.name}
      <img src={plant.cover} alt="cover" className="lmj-plant-item-cover " />
      {plant.isSpecialOffer && <div>soldes</div>}
      <div >
        <CareScale careType="water" scaleValue={plant.water} />
        <CareScale careType="light" scaleValue={plant.light} />
      </div>
      <button onClick={()=>updateCart(cart+1)}>
        Ajouter
      </button>
    </li>
  );
};
export default PlantItems;
