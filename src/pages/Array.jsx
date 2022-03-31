import React from 'react'

const Array = () => {

  const carros = ['Fusca', 'Gol', 'Celta', 'Corola', 'Corsa']
  const pessoas = ['Pessoa1', 'Pessoa2', 'Pessoa3', 'Pessoa4', 'Pessoa5']

  return (
    <div>

      <h1>Array</h1>
      <h2>Carros</h2>

      {carros.map(item => (
        <p>{item}</p>
      ))}

      <h2>Pessoas</h2>

      <ul>
        {pessoas.map(itemp => (
          <li>{itemp}</li>
        ))}
      </ul>




    </div>
  )
}

export default Array