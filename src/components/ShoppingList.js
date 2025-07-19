import plantlist from "../datas/plantList";
import PlantItems from './PlantItems'
import "../styles/ShoppingList.css";

const ShoppingList = () => {
  const listCategori = [
    ...new Set(plantlist.map((element) => element.category)),
  ];

  return (
    <div>
      <ul>
        {listCategori.map((category, index) => (
          <li key={`${index}-${category}`}>{category}</li>
        ))}
      </ul>
      <ul className='lmj-plant-list'>
        {
            plantlist.map((plant)=>(
              <PlantItems plant={plant}/>
            ))
        }
      </ul>
    </div>
  );
};
export default ShoppingList;
