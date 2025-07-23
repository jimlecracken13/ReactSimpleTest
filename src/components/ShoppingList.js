import PlantItems from './PlantItems'
import "../styles/ShoppingList.css";
import plantlist from "../datas/plantList";
const ShoppingList = ({cart, updateCart, category}) => {
  
  
  return (
    <div>
    
      <ul className='lmj-plant-list'>
        {
            category !== "" ? 
            plantlist.filter(plant => plant.category === category)
            .map(plant => (
              <PlantItems plant={plant} cart={cart} updateCart={updateCart} category={category}/>
            ))
            : plantlist.map(plant => <PlantItems plant={plant} cart={cart} updateCart={updateCart} category={category}/>)
        }
      </ul>
    </div>
  );
};
export default ShoppingList;
