import plantlist from "../datas/plantList";

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
      <ul>
        {
            plantlist.map((plant)=>(
                <li key={plant.id}>{plant.name}</li>
            )
        )
        }
      </ul>
    </div>
  );
};
export default ShoppingList;
