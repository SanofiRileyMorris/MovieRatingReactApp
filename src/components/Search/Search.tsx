import { Autocomplete, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { MoviesApi } from '../../types/api'
import { Loading } from '../Loading/Loading'
import styles from './Search.module.css'

async function getTopRatedMovies(): Promise<MoviesApi[]> {
  const url =
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_ACCESS_TOKEN,
    },
  }
  return fetch(url, options)
    .then((result) => result.json())
    .then((data) => data.results as MoviesApi[])
}

export const Search = () => {
  const [movies, setMovieData] = useState<MoviesApi[] | null>()
  const [loadingState, setLoadingState] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setLoadingState(true)
    getTopRatedMovies()
      .then((movies) => {
        setMovieData(movies)
        setLoadingState(false)
      })
      .catch(() => {
        setIsError(true)
      })
  }, [])

  if (loadingState) {
    return <Loading />
  }

  if (isError) {
    return (
      <div className={styles.error}>
        <h2>Something went wrong</h2>
      </div>
    )
  }

  if (!movies) {
    return null
  }
  return (
    <div>
      <Autocomplete
        options={movies.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} />}
        className={styles.search}
      />
    </div>
  )
}
