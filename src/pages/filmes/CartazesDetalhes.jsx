import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFIlmes'

const CartazesDetalhes = () => {

    const params = useParams()

    const [cartaz, setCartaz] = useState({})

    useEffect(() => {
        apiFilmes.get('movie/' + params.id + '?language=pt-BR').then(resultado => {
            setCartaz(resultado.data);
        })
    }, [])


    return (
        <div>
            <h1>{cartaz.title}</h1>

            <Row>
                <Col md={4}>
                    <Card border='secondary'>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + cartaz.poster_path} />
                    </Card>
                </Col>

                <Col md={8}>
                <p className='fs-5'><strong className='fs-4'>Título Original: </strong>{cartaz.original_title}</p>
                <p className='fs-5'><strong className='fs-4'>Data de Lançamento: </strong>{cartaz.release_date}</p>
                    <p className='fs-5'><strong className='fs-4'>Slogan: </strong>{cartaz.tagline}</p>
                    <p className='fs-5'><strong className='fs-4'>Sinopse: </strong>{cartaz.overview}</p>
                    <p className='fs-5'><strong className='fs-4'>Linguagem Original: </strong>{cartaz.original_language}</p>
                    <p className='fs-5'><strong className='fs-4'>Popularidade: </strong>{cartaz.popularity}</p>
                    <p className='fs-5'><strong className='fs-4'>Votação média: </strong>{cartaz.vote_average}</p>
                    <p className='fs-5'><strong className='fs-4'>Contagem de votos: </strong>{cartaz.vote_count}</p>
                    <p className='fs-5'><strong className='fs-4'>Orçamento: </strong>{cartaz.budget}</p>
                </Col>
            </Row>

        </div>
    )
}

export default CartazesDetalhes