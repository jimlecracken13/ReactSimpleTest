import PlantItems from './PlantItems'
import "../styles/ShoppingList.css";
import plantlist from "../datas/plantList";
const ShoppingList = ({cart, updateCart, categorie}) => {
  
  
  return (
    <div>
    
      <ul className='lmj-plant-list'>
        {
            plantlist.map((plant)=>(
              <PlantItems plant={plant} cart={cart} updateCart={updateCart} categorie={categorie}/>
            ))
        }
      </ul>
    </div>
  );
};
export default ShoppingList;
