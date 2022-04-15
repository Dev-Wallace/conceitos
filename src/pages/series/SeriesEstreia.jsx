import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFIlmes'

const SeriesEstreia = () => {

    const [estreias, setEstreias] = useState([])

    useEffect(() => {
        apiFilmes.get('tv/airing_today?language=pt-BR').then(resultado => {
            setEstreias(resultado.data.results)
        })
    }, [])

    return (
        <div>
            <h1 className='mt-5'>Séries em Estreia Hoje</h1>

            <Row>
                {estreias.map(item => (
                    <Col key={item.id} className='mb-3' md={3}>
                        <Card border='secondary' >
                            <Link to={'/series/' + item.id}>
                                <Card.Img title={item.name} variant='top' src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                            </Link>
                            <Card.Body>
                                <Card.Title> {item.name} </Card.Title>
                                <Card.Text> <strong>Título Original: </strong> {item.original_name} </Card.Text>
                                <Card.Text> <strong>Popularidade: </strong> {item.popularity} </Card.Text>
                                <Link className='btn btn-warning' to={'/series/' + item.id}> <strong>Leia Mais</strong> </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default SeriesEstreia