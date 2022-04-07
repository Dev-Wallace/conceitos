import React from 'react'
import { Link } from 'react-router-dom'

const Carros = () => {
  return (
    <div>
      <Link className='btn btn-dark' to={'/objetos'} >Ir para carros</Link>
    </div>
  )
}

export default Carros