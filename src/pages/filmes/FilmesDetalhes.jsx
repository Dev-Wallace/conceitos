import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFIlmes'

const FilmesDetalhes = () => {

    const params = useParams()

    const [filme, setFilme] = useState({})
    const [atores, setAtores] = useState([])

    useEffect(() => {

        apiFilmes.get('movie/' + params.id + '?language=pt-BR').then(resultado => {
            setFilme(resultado.data)
        })
        apiFilmes.get('movie/' + params.id + '/credits?language=pt-BR').then(resultado => {
            setAtores(resultado.data.cast)
        })

    }, [])

    return (
        <div>
            {!filme.id && <h1>Carregando...</h1>}
            {filme.id &&
                <div>
                    <h1 className='mt-5'>{filme.title}</h1>
                    <Row>

                        <Col md={4}>
                            <Card border='secondary'>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                            </Card>
                        </Col>

                        <Col md={8}>
                            <p className='fs-5'><strong className='fs-4'>Título Original: </strong>{filme.original_title}</p>
                            <p className='fs-5'><strong className='fs-4'>Data de Lançamento: </strong>{filme.release_date}</p>
                            <p className='fs-5'><strong className='fs-4'>Gênero: </strong>
                                {filme.genres.map(item => (
                                    <span key={item.id}>{item.name} | </span>
                                ))}
                            </p>
                            <p className='fs-5'><strong className='fs-4'>Slogan: </strong>{filme.tagline}</p>
                            <p className='fs-5'><strong className='fs-4'>Sinopse: </strong>{filme.overview}</p>
                            <p className='fs-5'><strong className='fs-4'>Linguagem Original: </strong>{filme.original_language}</p>
                            <p className='fs-5'><strong className='fs-4'>Popularidade: </strong>{filme.popularity}</p>
                            <p className='fs-5'><strong className='fs-4'>Votação média: </strong>{filme.vote_average}</p>
                            <p className='fs-5'><strong className='fs-4'>Contagem de votos: </strong>{filme.vote_count}</p>
                            <p className='fs-5'><strong className='fs-4'>Orçamento: </strong>{filme.budget}</p>
                            <Link className='btn btn-warning' to={-1} > <strong>Voltar</strong> </Link>
                        </Col>

                        <Col md={12} className='mt-3'>
                            <h1>Atores</h1>
                        </Col>

                        <Row>
                            {atores.map(item => (
                                <Col className='mb-3' key={item.id} md={2}>
                                    <Card className='h-100' title={item.name} border="secondary">
                                        <Link to={'/atores/' + item.id}>
                                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                                        </Link>
                                        <Card.Body>
                                            <Link className='text-decoration-none text-dark' to={'/atores/' + item.id}><strong>{item.name}</strong></Link>
                                            <Card.Text> <strong>Papel: </strong> {item.character} </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>



                    </Row>
                </div>
            }
        </div>
    )
}

export default FilmesDetalhes