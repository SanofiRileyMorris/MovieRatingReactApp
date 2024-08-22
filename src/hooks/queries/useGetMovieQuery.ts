import { useQuery } from '@tanstack/react-query'
import { getMovie } from '../../api'

export const GET_MOVIE_QUERY_KEY = 'QUERY/GETMOVIE'

export const useGetMovieQuery = (movieId: string) =>
  useQuery({
    queryKey: [GET_MOVIE_QUERY_KEY, movieId],
    queryFn: getMovie,
  })
