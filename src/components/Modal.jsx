import React from 'react'
import cerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal}) => {

    const ocultarModal = () => {
        setModal(false)
    }

  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img 
                src={cerrarBtn}
                alt='cerrar Modal'
                onClick={ocultarModal}
            />
        </div>
        <form className='formulario'>
            <legend>Nuevo gasto</legend>
        </form>
    </div>
  )
}

export default Modal