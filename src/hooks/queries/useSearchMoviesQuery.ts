import { useQuery } from '@tanstack/react-query'
import { searchMovies } from '../../api'

export const SEARCH_MOVIES_QUERY_KEY = 'QUERY/SEARCHMOVIES'

export const useSearchMoviesQuery = (search: string) => {

  return useQuery({
    queryKey: [SEARCH_MOVIES_QUERY_KEY, search],
    queryFn: searchMovies,
    enabled: search !== '',
  })
}
