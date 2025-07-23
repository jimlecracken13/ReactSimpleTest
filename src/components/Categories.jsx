import plantlist from "../datas/plantList";
const Categorie = ({category, setCategory}) => {
  const listCategori = [
    ...new Set(plantlist.map((element) => element.category)),
  ];

  return (
    <div>
      <select name="categorie" id="categorie" value={category} onChange={(event)=>setCategory(event.target.value)}>
          <option>--choisissez une categorie---</option>
        {listCategori.map((cate, index) => (
          <option key={`${index}`}>{cate}</option>
        ))}
      </select>
      <button onClick={()=>setCategory("")}>Reinitialiser</button>
    </div>
  );
};
export default Categorie;
