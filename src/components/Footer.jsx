import { useState } from "react"
import '../styles/Footer.css'

function checkEmail(value)
{
   return  !value.includes('@') ? alert(`Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.`) : null
}

const Footer=()=>{

    const [inputValue, setInputValue] = useState('')

    return (
       <footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input type="email" name="email" id="email" 
            value={inputValue}
            onChange={e=>setInputValue(e.target.value)}
            onBlur={e=>checkEmail(e.target.value)}/>
		</footer>
    )

}
export default Footer