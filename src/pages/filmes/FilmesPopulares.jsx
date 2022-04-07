import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFIlmes'

const FilmesPopulares = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        apiFilmes.get('movie/popular?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.results)
        })

    }, [])


    return (
        <div>
            <h1>Filmes Populares</h1>

            <Row>
                {filmes.map(item => (
                    <Col md={3} className="mb-3" >
                        <Card border='dark'>
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text> <strong>Titulo original:</strong>  {item.original_title}</Card.Text>
                                <Card.Text><strong>Popularidade:</strong> {item.popularity}</Card.Text>
                                <Link className='btn btn-dark' to={"/filmes/" + item.id} >Leia mais</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default FilmesPopulares