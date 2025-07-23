import plantlist from "../datas/plantList";
const Categorie = ({categorie, setCategorie}) => {
  const listCategori = [
    ...new Set(plantlist.map((element) => element.category)),
  ];

  return (
    <div>
      <select name="categorie" id="categorie" value={categorie} 
          onChange={(event)=>setCategorie(event.target.value)}>
        {listCategori.map((category, index) => (
          <option key={`${index}-${category}`}>{category}</option>
        ))}
        {console.log(categorie)}
      </select>
    </div>
  );
};
export default Categorie;
