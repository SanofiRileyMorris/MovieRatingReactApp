import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { RedButton } from "../StyledMUI/StyledMUI";
import styles from "./MovieList.module.css";

type MovieApi = {
    title: string;
    id: string;
    poster_path: string;
}

async function getTopRatedMovies(): Promise<MovieApi[]> {
    return fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            accept: "application/json"
        }
    })
        .then(result => result.json())
        .then(data => data.results as MovieApi[]);
}


export const MovieList = () => {
    const [movies, setMovieData] = useState<MovieApi[] | null>();
    const [loadingState, setLoadingState] = useState(false);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        setLoadingState(true);
        getTopRatedMovies().then((movies) => {
            setMovieData(movies);
            setLoadingState(false);
        })
        .catch(() => {
            setIsError(true);
        });
    }, [])

    if(loadingState) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>Something went wrong</div>
    }

    if(!movies) {
        return null;
    }

    // paginate would be nice 
    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id} onClick={() => navigate(`/movie/${id}`)}>
                    <h1>{movie.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                </div>
            ))}
        </div>
    );
};
