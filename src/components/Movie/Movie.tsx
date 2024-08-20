import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { MovieApi } from '../../types/api'
import { useLocation } from 'react-router-dom'
import { Loading } from '../Loading/Loading'

async function getMovie(movie: any): Promise<MovieApi> {
    const url = `https://api.themoviedb.org/3/movie/${movie}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
        }
    };

    return fetch(url, options)
        .then((res) => res.json())
        .then((res) => res as MovieApi)
}

export const Movie = () => {
    const [movie, setMovieData] = useState<MovieApi>()
    const [loadingState, setLoadingState] = useState(false)
    const [isError, setIsError] = useState(false)
    const location = useLocation()
    const movieId = location.pathname.split('/')[2]

    useEffect(() => {
        setLoadingState(true)
        getMovie(movieId)
            .then((data) => {
                setMovieData(data)
                setLoadingState(false)
            })
            .catch(() => {
                setIsError(true)
            })
    }, [movieId])

    if (loadingState) {
        return <Loading />
    }

    if (isError) {
        return <div>Something went wrong</div>
    }

    if (!movie) {
        return null
    }

    return (
        <div>
            <Box sx={{ bgcolor: 'white', padding: '3rem', borderRadius: '2rem' }}>
                <div key={movie.id}>
                    <h1>{movie.title}</h1>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                    {/* <img src={"https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"} alt={"testing testing"} /> */}
                    <span>
                        <h4>The budget:</h4>
                        {movie.budget}
                    </span>
                </div>
            </Box>
        </div>
    )
}
