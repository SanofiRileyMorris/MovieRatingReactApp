import { Box } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { Loading } from '../Loading/Loading'
import styles from './Movie.module.css'
import { RedButton } from '../StyledMUI/StyledMUI'
import { useGetMovieQuery } from '../../hooks/queries/useGetMovieQuery'

export const Movie = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const movieId = location.pathname.split('/')[2]
  const { data: movie, isLoading, isError } = useGetMovieQuery(movieId)

  if (isLoading) {
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
      <Box
        sx={{
          bgcolor: 'white',
          padding: '3rem',
          borderRadius: '2rem',
          margin: '3rem',
        }}
      >
        <div className={styles.backButton}>
          <RedButton onClick={() => navigate('/')}>Back</RedButton>
        </div>
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <h3>{movie.tagline}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <span>
            <h4>Overview:</h4>
            {movie.overview}
          </span>
          <span>
            <h5>
              Released in{' '}
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(new Date(movie.release_date))}
              , with a budget of{' '}
              {new Intl.NumberFormat('en-US').format(movie.budget)}, grossed a
              total revenue of{' '}
              {new Intl.NumberFormat('en-US').format(movie.revenue)}.
            </h5>
          </span>
          <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
              <span>
                <h4>Popularity:</h4>
                {movie.popularity}
              </span>
              <span>
                <h4>Runtime:</h4>
                {movie.runtime}
              </span>
            </div>
            <div className={styles.innerContainer}>
              <span>
                <h4>Vote Average:</h4>
                {movie.vote_average}
              </span>
              <span>
                <h4>Vote Count:</h4>
                {new Intl.NumberFormat('en-US').format(movie.vote_count)}
              </span>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}
