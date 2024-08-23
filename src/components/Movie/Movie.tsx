import { Box } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { Loading } from '../Loading/Loading'
import styles from './Movie.module.css'
import { StyledButton } from '../StyledMUI/StyledMUI'
import { useGetMovieQuery } from '../../hooks/queries/useGetMovieQuery'

export const Movie = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const movieId = location.pathname.split('/')[2]
  const { data: movie, isLoading, isError } = useGetMovieQuery(movieId)

  if (isLoading) {
    return <Loading size={60} />
  }

  if (isError) {
    return <div className={styles.error}>Something went wrong</div>
  }

  if (!movie) {
    return null
  }

  return (
    <div className={styles.movieDetails}>
      <Box className={styles.container}>
        <div className={styles.backButton}>
          <StyledButton onClick={() => navigate('/')}>Back</StyledButton>
        </div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3 className={styles.tagline}>{movie.tagline}</h3>
        <p className={styles.overview}>{movie.overview}</p>
        <div className={styles.stats}>
          <span className={styles.statItem}>
            Released:{' '}
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }).format(new Date(movie.release_date))}
          </span>
          <span className={styles.statItem}>
            Budget: {new Intl.NumberFormat('en-US').format(movie.budget)}
          </span>
          <span className={styles.statItem}>
            Revenue: {new Intl.NumberFormat('en-US').format(movie.revenue)}
          </span>
          <span className={styles.statItem}>
            Popularity: {movie.popularity}
          </span>
          <span className={styles.statItem}>
            Runtime: {movie.runtime} minutes
          </span>
          <span className={styles.statItem}>
            Vote Average: {movie.vote_average}
          </span>
          <span className={styles.statItem}>
            Vote Count:{' '}
            {new Intl.NumberFormat('en-US').format(movie.vote_count)}
          </span>
        </div>
      </Box>
    </div>
  )
}
