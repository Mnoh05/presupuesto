import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'



const Header = ({presupuesto, setPresupuesto,
  validPresupuesto, setValidPresupuesto}) => {
  return (
    <header>

      {validPresupuesto ?
       (<p>Control del presupuesto</p>) : 
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