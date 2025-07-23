import CareScale from "./CareScale";
import "../styles/PlantItems.css";

const addToCart = (cart, plant, updateCart) => {
  //try to find if plant existe
  const currentPlant = cart.find((element) => element.name === plant.name);
  if (currentPlant) {
    const otherPlants = cart.filter((element) => element.name !== plant.name);
    updateCart([
      ...otherPlants,
      { ...currentPlant, amont: currentPlant.amont + 1 },
    ]);
  } else {
    updateCart([
      ...cart,
      { id: plant.id, name: plant.name, price: plant.price, amont: 1 },
    ]);
  }
};
const PlantItems = ({ plant, cart, updateCart}) => {
  return (
    <li key={plant.id} className="lmj-plant-item">
      <img src={plant.cover} alt="cover" className="lmj-plant-item-cover " />
      {plant.isSpecialOffer && <div>soldes</div>}
      {plant.name}
      <div>
        <CareScale careType="water" scaleValue={plant.water} />
        <CareScale careType="light" scaleValue={plant.light} />
        <button onClick={() => addToCart(cart, plant, updateCart)}>
          Ajouter
        </button>
      </div>
    </li>
  );
};
export default PlantItems;
