import water from '../assets/water.svg'
import sun from '../assets/sun.svg'
import "../styles/CareScale.css"
function handleClick (careType, scaleValue){
    
    if(careType === "light")
    {
        if(scaleValue === 1)
        {
            alert(`necessite peu de lumière`)
        }
        if(scaleValue === 2)
        {
            alert(`necessite modérement de la lumière`)
        }
        if(scaleValue === 3)
        {
            alert(`necessite beaucoup de lumière`)
        }
    }
    else{
        if(scaleValue === 1)
        {
            alert(`necessite peu d'eau `)
        }
        if(scaleValue === 2)
        {
            alert(`necessite modérement de l'eau `)
        }
        if(scaleValue === 3)
        {
            alert(`necessite beaucoup d'eau`)
        }
    }
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