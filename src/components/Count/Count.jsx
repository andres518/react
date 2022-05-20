import React,{ useState } from 'react'
import { ButtonUI } from '../UI/ButtonUI/ButtonUI'


 export const Count = () => {

  const [counter, setCounter] = useState(0)

  return (
    <div className="contador">
      <h3 className="Count">{counter}</h3>      
      <hr className="hr"></hr>
      <div className="buttons">
      <ButtonUI style="btnMas" event={()=> setCounter(counter+1)} texts=" + mas" />
      <ButtonUI style="btnReset" event={()=> setCounter(0)} texts=" reset" />
      <ButtonUI style="btnMenos" event={()=> setCounter(counter-1)} texts="- menos" />

      </div>
        </div>
        
        )
}

