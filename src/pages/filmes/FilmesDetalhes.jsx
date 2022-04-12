import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import {     useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFIlmes'

const FilmesDetalhes = () => {

    const params = useParams()

    const [filme, setFilme] = useState({})

    useEffect(() => {

        apiFilmes.get('movie/' + params.id + '?language=pt-BR').then(resultado => {
            setFilme(resultado.data)
        })

    }, [])

    return (
        <div>
            <h1>{filme.title}</h1>

            <Row>
                <Col md={4}>
                    <Card border='secondary'>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                    </Card>
                </Col>

                <Col md={8}>
                    <p className='fs-5'><strong className='fs-4'>Título Original: </strong>{filme.original_title}</p>
                    <p className='fs-5'><strong className='fs-4'>Data de Lançamento: </strong>{filme.release_date}</p>
                    <p className='fs-5'><strong className='fs-4'>Slogan: </strong>{filme.tagline}</p>
                    <p className='fs-5'><strong className='fs-4'>Sinopse: </strong>{filme.overview}</p>
                    <p className='fs-5'><strong className='fs-4'>Linguagem Original: </strong>{filme.original_language}</p>
                    <p className='fs-5'><strong className='fs-4'>Popularidade: </strong>{filme.popularity}</p>
                    <p className='fs-5'><strong className='fs-4'>Votação média: </strong>{filme.vote_average}</p>
                    <p className='fs-5'><strong className='fs-4'>Contagem de votos: </strong>{filme.vote_count}</p>
                    <p className='fs-5'><strong className='fs-4'>Orçamento: </strong>{filme.budget}</p>
                </Col>
            </Row>



        </div>
    )
}

export default FilmesDetalhes