import water from '../assets/water.svg'
import sun from '../assets/sun.svg'
function CareScale({careType, scaleValue})
{
    let weather
    const scaleType = careType === 'light' ? weather = sun : weather = water
    
    const range = [1,2,3];
    return (
        <div>
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