import "../styles/Banner.css";
import logo from "../assets/leaf.png";
const Banner = () => {
  const titre = "La maison jungle";
  const banner = (
    <div className="lmj-banner">
        <img src={logo} alt="logo" className="lmj-logo"/>
        <h1 className="lmj-title">{titre.toUpperCase()}</h1>
    </div>
  );

  return banner;
};

export default Banner;
