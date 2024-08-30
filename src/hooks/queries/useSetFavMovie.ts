import { useQuery } from '@tanstack/react-query'
import { getMovie } from '../../api'

export const SET_FAV_MOVIE_QUERY_KEY = 'QUERY/SETFAVMOVIE'

export const useGetMovieQuery = (userId: string) =>
  useQuery({
    queryKey: [SET_FAV_MOVIE_QUERY_KEY, userId],
    queryFn: getMovie,
  })
