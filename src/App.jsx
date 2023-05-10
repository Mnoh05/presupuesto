import { useState } from 'react'

import Header from "./components/Header"

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
    </div>

   
  )
}

export default App
