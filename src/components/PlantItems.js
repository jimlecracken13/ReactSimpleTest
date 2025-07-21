import CareScale from "./CareScale";
import cover from "../assets/monstera.jpg";
import "../styles/PlantItems.css";
function handleClick(e)
{
    console.log("Ceci est mon event", e)
}
const PlantItems = ({ plant }) => {
  return (
    <li key={plant.id} className="lmj-plant-item" onClick={handleClick}>
      {plant.name}
      <img src={cover} alt="cover" className="lmj-plant-item-cover " />
      {plant.isSpecialOffer && <div>soldes</div>}
      <div>
        <CareScale careType="water" scaleValue={plant.water} />
        <CareScale careType="light" scaleValue={plant.light} />
      </div>
    </li>
  );
};
export default PlantItems;
