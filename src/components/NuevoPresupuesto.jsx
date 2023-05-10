import React, { useState } from 'react'
import Mensaje from './Mensaje'


const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault()    
    let value = presupuesto
    if(!Number(value) ||Number(value < 0)){
      setMensaje("Presupuesto invalido")
        return
    }


    console.log("Presupuesto valido")
    
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
          <label>Definir el Nuevo Presupuesto</label>
          <input
            className='nuevo-presupuesto'
            type="text"
            placeholder='Añadir..'
            value={presupuesto}
            onChange={e => setPresupuesto(e.target.value)}
          />

        </div>
        <input type='submit' value="añadir"/>
        {mensaje && <Mensaje tipo = "error">{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto