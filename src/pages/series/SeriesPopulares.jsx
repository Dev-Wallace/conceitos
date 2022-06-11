import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFIlmes'

const SeriesPopulares = () => {

  const [series, setSeries] = useState([])

  useEffect(() => {
    apiFilmes.get('tv/popular?language=pt-BR').then(resultado => {
      setSeries(resultado.data.results)
    })
  }, [])

  return (
    <div>

      {!series.length && <h1>Carregando...</h1>}

      <h1 className='mt-5'> <strong>Séries Populares</strong> </h1>

      <Row>
        {series.map(item => (
          <Col key={item.id} md={3} className='mb-3'>
            <Card className='h-100' border='secondary'>
              <Link to={"/series/" + item.id} >
                <Card.Img title={item.name} variant='top' src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
              </Link>
              <Card.Body>
                <Card.Title> <strong>{item.name}</strong> </Card.Title>
                <Card.Text> <strong>Título Original: </strong> {item.original_name} </Card.Text>
                <Card.Text> <strong>Popularidade: </strong> {item.popularity} </Card.Text>
                <Link className='btn btn-warning' to={"/series/" + item.id} ><strong>Leia mais</strong></Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default SeriesPopulares