import React, { useEffect, useState } from 'react'
import apiFilmes from '../../services/apiFIlmes'

const FilmesPopulares = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{

        apiFilmes.get('movie/popular').then(resultado=>{
            console.log(resultado.data.results)
        })
    
    }, [])


    return (
        <div>
            <h1>Filmes Populares</h1>
        </div>
    )
}

export default FilmesPopulares