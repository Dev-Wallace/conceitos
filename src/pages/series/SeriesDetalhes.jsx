import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFIlmes'

const SeriesDetalhes = () => {

    const params = useParams()

    const [serie, setSerie] = useState({})
    const [atores, setAtores] = useState([])
    const [temporadas, setTemporadas] = useState([])

    useEffect(() => {
        apiFilmes.get('tv/' + params.id + '?language=pt-BR').then(resultado => {
            setSerie(resultado.data)
        })
        apiFilmes.get('tv/' + params.id + '?language=pt-BR').then(resultado => {
            setTemporadas(resultado.data.seasons)
        })
        apiFilmes.get('tv/' + params.id + '/credits?language=pt-BR').then(resultado => {
            setAtores(resultado.data.cast)
        })
    }, [])


    return (
        <div>
            {!serie.id && <h1>Carregando...</h1>}
            <h1 className='mt-5'> <strong>{serie.name}</strong>  </h1>

            <Row>
                <Col md={4}>
                    <Card border='secondary'>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + serie.poster_path} />
                    </Card>
                </Col>

                <Col md={8}>
                    <p className='fs-5'><strong className='fs-4'>Título Original: </strong>{serie.original_name}</p>
                    <p className='fs-5'><strong className='fs-4'>Data de Lançamento: </strong>{serie.first_air_date}</p>
                    <p className='fs-5'><strong className='fs-4'>Slogan: </strong>{serie.tagline}</p>
                    {/* <p className='fs-5'><strong className='fs-4'>Gênero: </strong>
                        {serie.genres.map(item => (
                            <span key={item.id}>{item.name} | </span>
                        ))}
                    </p> */}
                    <p className='fs-5'><strong className='fs-4'>Sinopse: </strong>{serie.overview}</p>
                    <p className='fs-5'><strong className='fs-4'>Linguagem Original: </strong>{serie.original_language}</p>
                    <p className='fs-5'><strong className='fs-4'>Popularidade: </strong>{serie.popularity}</p>
                    <p className='fs-5'><strong className='fs-4'>Votação média: </strong>{serie.vote_average}</p>
                    <p className='fs-5'><strong className='fs-4'>Contagem de votos: </strong>{serie.vote_count}</p>
                    <Link className='btn btn-warning' to={-1} > <strong>Voltar</strong> </Link>
                </Col>

                <Col md={12} className='mt-3'>
                    <h1>Temporadas</h1>
                </Col>

                <Row>
                    {temporadas.map(item => (
                        <Col className='mb-3' key={item.id} md={2}>
                            <Card className='h-100' title={item.name} border="secondary">
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                            </Card>
                        </Col>
                    ))}
                </Row>

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
    )
}

export default SeriesDetalhes