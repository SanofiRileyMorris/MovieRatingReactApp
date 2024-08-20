import { supabase } from '../supabase/supabaseClient'
import { MovieApi, MoviesApi } from '../types/api'

export async function getMovie(movieId: string): Promise<MovieApi> {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
  }

  return fetch(url, options)
    .then((res) => res.json())
    .then((res) => res as MovieApi)
}

export async function getMovies(searchMovie: string): Promise<MoviesApi[]> {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchMovie}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
  }
  return fetch(url, options)
    .then((result) => result.json())
    .then((data) => data.results as MoviesApi[])
}

export async function searchMovies(
  searchType: string,
  page: number
): Promise<{ results: MoviesApi[]; total_pages: number }> {
  const url = `https://api.themoviedb.org/3/movie/${searchType}?language=en-US&page=${page}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
  }

  return fetch(url, options)
    .then((result) => result.json())
    .then((data) => ({
      results: data.results as MoviesApi[],
      total_pages: data.total_pages,
    }))
}

export async function signOut() {
  await supabase.auth.signOut()
}
