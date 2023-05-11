import { useState } from 'react'
import Header from "./components/Header"
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [validPresupuesto, setValidPresupuesto] = useState(false)
 
  return (
    <div>
         
        <Header
          presupuesto = {presupuesto}
          setPresupuesto = {setPresupuesto}
          validPresupuesto = {validPresupuesto}
          setValidPresupuesto = {setValidPresupuesto}
        />
        {validPresupuesto && (
           <div className='nuevo-gasto'>
           <img src={IconoNuevoGasto} alt='Icono nuevo gasto'/>
           
         </div>
        )}
        
    </div>

   
  )
}

export default App
