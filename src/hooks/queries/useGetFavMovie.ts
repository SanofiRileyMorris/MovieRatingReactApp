import { useQuery } from '@tanstack/react-query'
import { getFavMovie } from '../../api'

export const GET_FAV_MOVIE_QUERY_KEY = 'QUERY/GETFAVMOVIE'

export const useGetMovieQuery = (userId: string) =>
  useQuery({
    queryKey: [GET_FAV_MOVIE_QUERY_KEY, userId],
    queryFn: getFavMovie,
  })
