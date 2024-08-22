import { useQuery } from '@tanstack/react-query'
import { listMovies, searchMovies } from '../../api'

export const LIST_MOVIES_QUERY_KEY = 'QUERY/LISTMOVIES'

export const useListMoviesQuery = (search: string) =>
  useQuery({
    queryKey: [LIST_MOVIES_QUERY_KEY, search],
    queryFn: listMovies,
  })
