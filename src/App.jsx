import { useState } from 'react'
import Header from "./components/Header"
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [validPresupuesto, setValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
     
    }, 3000)
  }
 
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
           <img src={IconoNuevoGasto} 
           alt='Icono nuevo gasto'
           onClick={handleNuevoGasto}/>
           
           
         </div>
        )}

        {
          modal && <Modal setModal = {setModal}/>
        }
        
    </div>

   
  )
}

export default App
