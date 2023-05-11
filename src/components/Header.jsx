import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'



const Header = ({presupuesto, setPresupuesto,
  validPresupuesto, setValidPresupuesto}) => {
  return (
    <header>

      {validPresupuesto ?
       (<ControlPresupuesto 
          presupuesto = {presupuesto}
       />) : 
       ( <NuevoPresupuesto 
          presupuesto = {presupuesto}
          setPresupuesto = {setPresupuesto}
          validPresupuesto = {validPresupuesto}
          setValidPresupuesto = {setValidPresupuesto}
      />)
       }
       
    </header>
  )
}

export default Header