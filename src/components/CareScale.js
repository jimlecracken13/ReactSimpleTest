import water from '../assets/water.svg'
import sun from '../assets/sun.svg'
import "../styles/CareScale.css"
function handleClick (careType, scaleValue){

    const intensite = {
        1: "peu",
        2: "modérement",
        3: "beacoup"
    }
    alert(`necessite ${intensite[scaleValue]} ${careType === "light"? "de lumière": " d'eau "}`)
}
function CareScale({careType, scaleValue})
{
    let weather
    careType === 'light' ? weather = sun : weather = water
    
    const range = [1,2,3];
    return (
        <div onClick={()=>handleClick(careType, scaleValue)}>
            {
                range.map(
                    (rangeElement)=> scaleValue >= rangeElement &&
                    <span key={rangeElement.toString()}>
                        <img src={weather} alt="logo" className="lmj-logo"/>
                    </span>
                )
            }
        </div>
    )
}
export default CareScale;