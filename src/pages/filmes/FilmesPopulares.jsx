import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFIlmes'

const FilmesPopulares = () => {

    const [filmes, setFilmes] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {

        apiFilmes.get('movie/popular?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.results)
        })

    }, [])
    
    function pesquisar(event){
        setQuery(event.target.value)
    }

    function pesquisarBotao(event){
        apiFilmes.get('search/movie?language=pt-BR&query=' + query).then(resultado => {
            setFilmes(resultado.data.results)
        })
    }

    return (
        <div>

            {!filmes.length && <h1>Carregando...</h1>}

            <h1 className='mt-5'>Filmes Populares</h1>

            <input type="text" placeholder='Digite o Filme' onChange={pesquisar}/>
            <Button className='btn btn-warning mb-2 ms-1'  onClick={pesquisarBotao}> Pesquisar </Button>

            <Row>
                {filmes.map(item => (
                    <Col key={item.id} md={3} className="mb-3" >
                        <Card className='h-100' border='secondary'>
                            <Link to={"/filmes/" + item.id} >
                                <Card.Img title={item.title} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
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