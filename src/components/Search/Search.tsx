import { Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchMoviesQuery } from '../../hooks/queries/useSearchMoviesQuery'
import { useDebouncedValue } from '../../hooks/use-debounce'
import styles from './Search.module.css'

export const Search = () => {
  const [search, setSearch] = useState<string>('')

  const navigate = useNavigate()

  const debounceSearchTerm = useDebouncedValue(search, 500)

  const { data: movies, isError } = useSearchMoviesQuery(debounceSearchTerm)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  if (isError) {
    return (
      <div className={styles.error}>
        <h2>Something went wrong</h2>
      </div>
    )
  }

  const handleSearch = (movieId: number) => {
    navigate(`/movie/${movieId}`)
  }

  const options = movies?.map((movie) => ({
    id: movie.id,
    label: movie.title,
  }))

  return (
    <div className={styles.container}>
      <Autocomplete
        freeSolo
        options={options ?? []}
        filterOptions={(x) => x}
        onChange={(_event, value) =>
          handleSearch((value as NonNullable<typeof options>[number])?.id)
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Movies"
            onChange={handleSearchChange}
          />
        )}
        className={styles.search}
      />
    </div>
  )
}
