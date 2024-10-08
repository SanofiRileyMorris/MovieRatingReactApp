import { Box, Container } from '@mui/material'
import { useState, useEffect } from 'react'
import styles from './MovieList.module.css'
import { useLocation, useNavigate } from 'react-router'
import { Loading } from '../Loading/Loading'
import { StyledButton, StyledPagination } from '../StyledMUI/StyledMUI'
import { useListMoviesQuery } from '../../hooks/queries/useListMoviesQuery'

export const MovieList = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [totalPages, setTotalPages] = useState(1)

  const params = new URLSearchParams(location.search)
  const movieSearchType = params.get('searchType') || ''
  const currentPage = parseInt(params.get('page') || '1', 10)

  const {
    data: moviesData,
    isLoading,
    isError,
  } = useListMoviesQuery(movieSearchType, currentPage)

  useEffect(() => {
    if (moviesData?.total_pages) {
      setTotalPages(moviesData.total_pages)
    }
  }, [moviesData])

  const handleClick = (searchType: string) => {
    navigate(`?searchType=${searchType}&page=1`)
  }

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    navigate(`?searchType=${movieSearchType}&page=${value}`)
  }

  if (isLoading) {
    return <Loading size={40} />
  }

  if (isError) {
    return (
      <div className={styles.error}>
        <h2>Something went wrong</h2>
      </div>
    )
  }

  const movies = moviesData?.results || []
  return (
    <div>
      <Container sx={{ zIndex: '-1' }}>
        <Box className={styles.quickSearch}>
          <StyledButton
            className={styles.button}
            onClick={() => handleClick('top_rated')}
          >
            Top Rated
          </StyledButton>
          <StyledButton
            className={styles.button}
            onClick={() => handleClick('popular')}
          >
            Popular
          </StyledButton>
          <StyledButton
            className={styles.button}
            onClick={() => handleClick('now_playing')}
          >
            Now Playing
          </StyledButton>
          <StyledButton
            className={styles.button}
            onClick={() => handleClick('upcoming')}
          >
            Upcoming
          </StyledButton>
        </Box>
        {movies?.length !== 0 && (
          <div>
            <Box
              className={styles.container}
              sx={{ bgcolor: 'white', padding: '3rem', borderRadius: '2rem' }}
            >
              {movies?.map((movie, index) => (
                <div
                  key={movie.id}
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  className={styles.movieItem}
                >
                  <h2>{movie.title}</h2>
                  {/* <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt={movie.title}
                  /> */}
                  <p className={styles.votes}>
                    Averaged {movie.vote_average} over {movie.vote_count} votes
                  </p>
                </div>
              ))}
            </Box>
            <div className={styles.pagination}>
              <StyledPagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
              />
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
