import { Autocomplete, AutocompleteCloseReason, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { MoviesApi } from "../../types/api";
// import { Loading } from "../Loading/Loading";
import styles from "./Search.module.css";

async function getMovies(search: String): Promise<MoviesApi[]> {
    const url = `https://api.themoviedb.org/3/search/movie?query=${search}`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
        }
    };
    return fetch(url, options)
        .then(result => result.json())
        .then(data => data.results as MoviesApi[]);
}

export const Search = () => {
    const [movies, setMovieData] = useState<MoviesApi[] | null>();
    // const [loadingState, setLoadingState] = useState(false);
    const [isError, setIsError] = useState(false);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        if (search.trim() === "") {
            setMovieData(null);
            return;
        }
        // setLoadingState(true);
        getMovies(search).then((movies) => {
            setMovieData(movies);
            // setLoadingState(false);
        }).catch(() => {
            setIsError(true);
            // setLoadingState(false);
        });
    }, [search]);


    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    // if (loadingState) {
    //     return (<Loading />)
    // }

    if (isError) {
        return <div className={styles.error}>
            <h2>
                Something went wrong
            </h2>
        </div>
    }

    // if (!movies) {
    //     return null;
    // }

    const handleClose = () => {
        console.log(search, "check check");

    }
    return (
        <div className={styles.container}>
            <Autocomplete
                freeSolo
                options={movies ? movies.map((option) => option.title) : []}
                // filterOptions={(x) => x}
                onClose={(
                    event: React.ChangeEvent<{}>,
                    reason: AutocompleteCloseReason,
                ) => {
                    console.log(reason);
                    if (reason === 'escape') {
                        handleClose();
                    }
                }}
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
    );
};
