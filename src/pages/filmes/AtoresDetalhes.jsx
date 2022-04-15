import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import apiFilmes from '../../services/apiFIlmes'

const AtoresDetalhes = () => {

    const params = useParams()

    const [ator, setAtor] = useState({})
    const [filmes, setFilmes] = useState([])
    const [series, setSeries] = useState([])

    useEffect(() => {
        apiFilmes.get('person/' + params.id + '?language=pt-BR').then(resultado => {
            setAtor(resultado.data)
        })

        apiFilmes.get('person/' + params.id + '/movie_credits?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.cast)
        })

        apiFilmes.get('person/' + params.id + '/tv_credits?language=pt-BR').then(resultado => {
            setSeries(resultado.data.cast)
        })

    }, [])

    return (
        <div >
            <h1 className='mt-5'> <strong>{ator.name}</strong> </h1>

            <Row>
                <Col md={4}>
                    <Card border='secondary'>
                        <Card.Img variant='top' src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                    </Card>
                </Col>

                <Col md={8}>
                    <p className='fs-5'><strong className='fs-4'>Biografia: </strong>{ator.biography}</p>
                    <p className='fs-5'><strong className='fs-4'>Data de Aniversário: </strong>{ator.birthday}</p>
                    <p className='fs-5'><strong className='fs-4'>Local de Nascimento: </strong>{ator.place_of_birth}</p>
                    <p className='fs-5'><strong className='fs-4'>Popularidade: </strong>{ator.popularity}</p>
                    <Link className='btn btn-warning' to={-1} > <strong>Voltar</strong> </Link>
                </Col>

                <Col md={12} className='mt-3'>
                    <h1>Filmes</h1>
                </Col>

                <Row>
                    {filmes.map(item => (
                        <Col className='mb-3' key={item.id} md={2}>
                            <Card title={item.title} border="secondary">
                                <Link to={'/filmes/' + item.id}>
                                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                                </Link>
                                <Card.Body>
                                    <Link className='text-decoration-none text-dark' to={'/filmes/' + item.id}><strong>{item.title}</strong></Link>
                                    <Card.Text> <strong>Papel: </strong> {item.character} </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Col md={12} className='mt-3'>
                    <h1>Séries</h1>
                </Col>

                <Row>
                {series.map(item => (
                        <Col className='mb-3' key={item.id} md={2}>
                            <Card title={item.name} border="secondary">
                                <Link to={'/series/' + item.id}>
                                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                                </Link>
                                <Card.Body>
                                    <Link className='text-decoration-none text-dark' to={'/series/' + item.id}><strong>{item.name}</strong></Link>
                                    <Card.Text> <strong>Papel: </strong> {item.character} </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Row>
        </div>
    )
}

export default AtoresDetalhes