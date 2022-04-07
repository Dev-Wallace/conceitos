
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import apiFilmes from '../../services/apiFIlmes'

const FilmesLancamentos = () => {

    const [cartazes, setCartazes] = useState([])

    useEffect(() => {

        apiFilmes.get('movie/now_playing?language=pt-BR').then(resultado => {
            setCartazes(resultado.data.results);
        })

    }, [])

    return (
        <div>

            <h1>Filmes Em Cartaz</h1>

            <Row>
                {cartazes.map(item => (
                    <Col md={3} className="mb-3">
                        <Card border='dark'>
                            <Card.Img variant='top' src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text><strong>Título Original: </strong> {item.original_title}</Card.Text>
                                <Card.Text><strong>Popularidade: </strong> {item.popularity}</Card.Text>
                                <Button variant='dark'>Leia mais</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default FilmesLancamentos