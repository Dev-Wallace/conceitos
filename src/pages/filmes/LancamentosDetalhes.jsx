import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFIlmes'

const LancamentosDetalhes = () => {

    const params = useParams()

    const [lancamento, setLancamento] = useState({})

    useEffect(() => {

        apiFilmes.get('movie/' + params.id + '?language=pt-BR').then(resultado => {
            setLancamento(resultado.data)
        })

    }, [])

    return (
        <div>
            <h1>{lancamento.title}</h1>

            <Row>
                <Col md={4}>
                    <Card border='secondary'>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + lancamento.poster_path} />
                    </Card>
                </Col>

                <Col md={8}>
                    <p className='fs-5'><strong className='fs-4'>Título Original: </strong>{lancamento.original_title}</p>
                    <p className='fs-5'><strong className='fs-4'>Data de Lançamento: </strong>{lancamento.release_date}</p>
                    <p className='fs-5'><strong className='fs-4'>Slogan: </strong>{lancamento.tagline}</p>
                    <p className='fs-5'><strong className='fs-4'>Sinopse: </strong>{lancamento.overview}</p>
                    <p className='fs-5'><strong className='fs-4'>Linguagem Original: </strong>{lancamento.original_language}</p>
                    <p className='fs-5'><strong className='fs-4'>Popularidade: </strong>{lancamento.popularity}</p>
                    <p className='fs-5'><strong className='fs-4'>Votação média: </strong>{lancamento.vote_average}</p>
                    <p className='fs-5'><strong className='fs-4'>Contagem de votos: </strong>{lancamento.vote_count}</p>
                    <p className='fs-5'><strong className='fs-4'>Orçamento: </strong>{lancamento.budget}</p>
                </Col>
            </Row>
        </div>
    )
}

export default LancamentosDetalhes