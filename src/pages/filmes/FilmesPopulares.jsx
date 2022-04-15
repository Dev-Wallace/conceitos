import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
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

            {!filmes.length && <h1>Carregando...</h1>}

            <h1 className='mt-5'>Filmes Populares</h1>

            <Row>
                {filmes.map(item => (
                    <Col key={item.id} md={3} className="mb-3" >
                        <Card border='secondary'>
                            <Link to={"/filmes/" + item.id} >
                                <Card.Img  title={item.title} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                            </Link>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text> <strong>Titulo original:</strong>  {item.original_title}</Card.Text>
                                <Card.Text><strong>Popularidade:</strong> {item.popularity}</Card.Text>
                                <Link className='btn btn-warning' to={"/filmes/" + item.id} ><strong>Leia mais</strong></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default FilmesPopulares