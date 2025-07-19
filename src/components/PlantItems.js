import CareScale from './CareScale'
import cover from '../assets/monstera.jpg'
import '../styles/PlantItems.css'
const PlantItems = ({plant})=>{
    return(
        <li key={plant.id} className='lmj-plant-item'>
            {plant.name}
            <img src={cover} alt="cover" className="lmj-plant-item-cover "/>
            {    
            plant.isSpecialOffer && (<div>
                    soldes
                  </div>)
            }
            <CareScale careType='water'
            scaleValue={plant.water}/>
            <CareScale careType='light'
            scaleValue={plant.light}/>
        </li>
    )
}
export default PlantItems