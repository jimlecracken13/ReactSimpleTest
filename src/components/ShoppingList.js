import plantlist from "../datas/plantList";
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
                <li key={plant.id} className='lmj-plant-item'>{
                  plant.name}
                {  plant.isSpecialOffer && (<div>
                    soldes
                  </div>)
                }
                </li>
            ))
        }
      </ul>
    </div>
  );
};
export default ShoppingList;
