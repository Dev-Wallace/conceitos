import React from 'react'
import { Link } from 'react-router-dom'

const Carros = () => {
  return (
    <div className='mt-5'>
      <Link className='btn btn-warning' to={'/objetos'} > <strong>Ir para carros</strong> </Link>
    </div>
  )
}

export default Carros