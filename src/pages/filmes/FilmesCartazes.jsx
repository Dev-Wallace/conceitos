
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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

            <h1 className='mt-5'>Filmes Em Cartaz</h1>

            <Row>
                {cartazes.map( item => (
                    <Col key={item.id} md={3} className="mb-3">
                        <Card  border='secondary'>
                            <Link to={"/filmes/" + item.id} >
                                <Card.Img title={item.title} variant='top' src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                            </Link>
                            <Card.Body>
                                <Card.Title> {item.title}</Card.Title>
                                <Card.Text><strong>Título Original: </strong> {item.original_title}</Card.Text>
                                <Card.Text><strong>Popularidade: </strong> {item.popularity}</Card.Text>
                                <Link className='btn btn-warning' to={'/filmes/' + item.id} > <strong>Leia Mais</strong> </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default FilmesLancamentos