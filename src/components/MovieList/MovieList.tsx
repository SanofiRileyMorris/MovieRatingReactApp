import { Box, Container } from "@mui/material";
import { useState } from "react";
import { RedButton } from "../StyledMUI/StyledMUI";
import styles from "./MovieList.module.css";

export const MovieList = (movie: any) => {
    const movieTitle: string = movie.movie;
    const apiUrl: string = `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${process.env.REACT_APP_API_KEY}`;
    // const apiUrl: string = ` http://www.omdbapi.com/?apikey=${apiKey}&`;


    const [movieData, setMovieData] = useState<MovieData>();

    interface MovieData {
        Title: string;
        Year: string;
        Rated: string;
        Released: string;
        Runtime: string;
        Genre: string;
        Director: string;
        Writer: string;
        Actors: string;
        Plot: string;
        Language: string;
        Country: string;
        Awards: string;
        Poster: string;
        Ratings: Array<{ Source: string; Value: string }>;
        Metascore: string;
        imdbRating: string;
        imdbVotes: string;
        imdbID: string;
        Type: string;
        DVD: string;
        BoxOffice: string;
        Production: string;
        Website: string;
        Response: string;
    }

    async function fetchMovieData(url: string): Promise<void> {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: MovieData = await response.json();
            setMovieData(data)
            console.log(data);
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    }


    const handleSearch = async () => {
        fetchMovieData(apiUrl);
    };


    return (
        <div>

            <div className={styles.SearchButton}>
                <RedButton onClick={handleSearch}> Search</RedButton>
            </div>
            {movieData !== undefined && (
                <Container maxWidth="sm">
                    <Box sx={{ bgcolor: 'white', padding: "3rem", borderRadius: "2rem" }}>
                        {/* <span>
                            Title: {movieData?.Title}
                        </span> */}
                        <div>
                            {movieData && typeof movieData === 'object' && (
                                <div>
                                    {movieData && typeof movieData === 'object' && (
                                        <div>
                                            {Object.entries(movieData).map(([meta, data]) => (
                                                <div className={styles.movieItems}>
                                                    <h4 className={styles.meta}>
                                                        {meta}: {JSON.stringify(data)}
                                                    </h4>
                                                </div>


                                            ))}
                                        </div>
                                    )}

                                </div>
                            )}
                        </div>
                    </Box>
                </Container>
            )}
        </div>
    );
};
