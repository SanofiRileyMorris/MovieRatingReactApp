import { useQuery } from '@tanstack/react-query'
import { listMovies } from '../../api'

export const LIST_MOVIES_QUERY_KEY = 'QUERY/LISTMOVIES'

export const useListMoviesQuery = (search: string, page: number) =>
  useQuery({
    queryKey: [LIST_MOVIES_QUERY_KEY, search, page.toString()],
    queryFn: listMovies,
  })
