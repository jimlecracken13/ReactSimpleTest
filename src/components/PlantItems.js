import CareScale from './CareScale'

const PlantItems = ({plant})=>{
    return(
        <li key={plant.id} className='lmj-plant-item'>
            {plant.name}
            {plant.cover}
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