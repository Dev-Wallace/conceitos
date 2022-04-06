import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzgxYjYzN2U5NGVhY2ZiYmM2Mjg5NjhkNjBjMjhlYyIsInN1YiI6IjYyNGQ4ZDMwNGNiZTEyMDA5ODU4OTcxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cFm4v3v6jWdIkoKle0R6uZIlQ3bTaGF_uOBKSeq6zXY',
        'content-type':'application/json;charset=utf-8',
    }
})

export default apiFilmes

