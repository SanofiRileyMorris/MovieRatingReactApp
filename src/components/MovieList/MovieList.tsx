import { Box, Container } from '@mui/material'
import { useEffect, useState } from 'react'
import { MoviesApi } from '../../types/api'
import styles from './MovieList.module.css'
import { useLocation, useNavigate } from 'react-router'
import { Loading } from '../Loading/Loading'
import { RedButton, RedPagination } from '../StyledMUI/StyledMUI'
import { listMovies } from '../../api'

export const MovieList = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [movies, setMovies] = useState<MoviesApi[]>([])
  const [loadingState, setLoadingState] = useState(false)
  const [isError, setIsError] = useState(false)
  const [totalPages, setTotalPages] = useState(1)

  const params = new URLSearchParams(location.search)
  const movieSearchType = params.get('searchType') || ''
  const currentPage = parseInt(params.get('page') || '1', 10)

  const handleClick = (searchType: string) => {
    navigate(`?searchType=${searchType}&page=1`)
  }

  useEffect(() => {
    if (movieSearchType === "") return;

    setLoadingState(true)
    listMovies(movieSearchType, currentPage)
      .then((data) => {
        setMovies(data.results)
        setTotalPages(data.total_pages)
        setLoadingState(false)
      })
      .catch(() => {
        setIsError(true)
        setLoadingState(false)
      })
  }, [currentPage, movieSearchType])

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    navigate(`?searchType=${movieSearchType}&page=${value}`)
  }

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

  console.log(movies);


  return (
    <div>
      <Container sx={{ zIndex: '-1' }}>
        <Box className={styles.quickSearch}>
          <RedButton onClick={() => handleClick('top_rated')}>
            Top Rated
          </RedButton>
          <RedButton onClick={() => handleClick('popular')}>Popular</RedButton>
          <RedButton onClick={() => handleClick('now_playing')}>
            Now Playing
          </RedButton>
          <RedButton onClick={() => handleClick('upcoming')}>
            Upcoming
          </RedButton>
        </Box>
        {movies.length !== 0 && (
          <div>
            <Box
              sx={{ bgcolor: 'white', padding: '3rem', borderRadius: '2rem' }}
            >
              {movies.map((movie, index) => (
                <div
                  key={movie.id}
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  className={styles.movieItem}
                >
                  <h1>{movie.title}</h1>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className={styles.votes}>
                    Averaged {movie.vote_average} over {movie.vote_count} votes
                  </div>
                  {index < movies.length - 1 && (
                    <div className={styles.customDivider} />
                  )}
                </div>
              ))}
            </Box>
            <RedPagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              className={styles.pagination}
            />
          </div>
        )}
      </Container>
    </div>
  )
}
