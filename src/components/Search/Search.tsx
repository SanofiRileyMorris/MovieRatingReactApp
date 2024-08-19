import { Autocomplete, TextField } from "@mui/material";

import styles from "./Search.module.css";

export const Search = (movie: any) => {

    return (
        <div >
            <Autocomplete
                options={top100Films.map((option) => option.title)}
                renderInput={(params) =>
                    <TextField {...params}
                        label="Search"
                        onChange={(event) => {
                            movie.setMovie(event.currentTarget.innerHTML)
                        }}
                    // This isn't taking an input when written
                    />}
                className={styles.search}
                onChange={(event) => {
                    movie.setMovie(event.currentTarget.innerHTML)
                }}
            />

        </div>
    );
};
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption' },
    { title: 'The Godfather' },
    { title: 'The Godfather: Part II' },
    { title: 'The Dark Knight' },
    { title: '12 Angry Men' },
    { title: "Schindler's List" },
    { title: 'Pulp Fiction' },
    {
        title: 'The Lord of the Rings: The Return of the King'
    },
    { title: 'The Good, the Bad and the Ugly' },
    { title: 'Fight Club' },
    { title: 'The Lord of the Rings: The Fellowship of the Ring' },
    { title: 'Star Wars: Episode V - The Empire Strikes Back' },
    { title: 'Forrest Gump' },
    { title: 'Inception' },
    { title: 'The Lord of the Rings: The Two Towers' },
    { title: "One Flew Over the Cuckoo's Nest" },
    { title: 'Goodfellas' },
    { title: 'The Matrix' },
    { title: 'Seven Samurai' },
    { title: 'Star Wars: Episode IV - A New Hope' },
    { title: 'City of God' },
    { title: 'Se7en' },
    { title: 'The Silence of the Lambs' },
    { title: "It's a Wonderful Life" },
    { title: 'Life Is Beautiful' },
    { title: 'The Usual Suspects' },
    { title: 'Léon: The Professional' },
    { title: 'Spirited Away' },
    { title: 'Saving Private Ryan' },
    { title: 'Once Upon a Time in the West' },
    { title: 'American History X' },
    { title: 'Interstellar' },
    { title: 'Casablanca' },
    { title: 'City Lights' },
    { title: 'Psycho' },
    { title: 'The Green Mile' },
    { title: 'The Intouchables' },
    { title: 'Modern Times' },
    { title: 'Raiders of the Lost Ark' },
    { title: 'Rear Window' },
    { title: 'The Pianist' },
    { title: 'The Departed' },
    { title: 'Terminator 2: Judgment Day' },
    { title: 'Back to the Future' },
    { title: 'Whiplash' },
    { title: 'Gladiator' },
    { title: 'Memento' },
    { title: 'The Prestige' },
    { title: 'The Lion King' },
    { title: 'Apocalypse Now' },
    { title: 'Alien' },
    { title: 'Sunset Boulevard' },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb'
    },
    { title: 'The Great Dictator' },
    { title: 'Cinema Paradiso' },
    { title: 'The Lives of Others' },
    { title: 'Grave of the Fireflies' },
    { title: 'Paths of Glory' },
    { title: 'Django Unchained' },
    { title: 'The Shining' },
    { title: 'WALL·E' },
    { title: 'American Beauty' },
    { title: 'The Dark Knight Rises' },
    { title: 'Princess Mononoke' },
    { title: 'Aliens' },
    { title: 'Oldboy' },
    { title: 'Once Upon a Time in America' },
    { title: 'Witness for the Prosecution' },
    { title: 'Das Boot' },
    { title: 'Citizen Kane' },
    { title: 'North by Northwest' },
    { title: 'Vertigo' },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi'
    },
    { title: 'Reservoir Dogs' },
    { title: 'Braveheart' },
    { title: 'M' },
    { title: 'Requiem for a Dream' },
    { title: 'Amélie' },
    { title: 'A Clockwork Orange' },
    { title: 'Like Stars on Earth' },
    { title: 'Taxi Driver' },
    { title: 'Lawrence of Arabia' },
    { title: 'Double Indemnity' },
    {
        title: 'Eternal Sunshine of the Spotless Mind'
    },
    { title: 'Amadeus' },
    { title: 'To Kill a Mockingbird' },
    { title: 'Toy Story 3' },
    { title: 'Logan' },
    { title: 'Full Metal Jacket' },
    { title: 'Dangal' },
    { title: 'The Sting' },
    { title: '2001: A Space Odyssey' },
    { title: "Singin' in the Rain" },
    { title: 'Toy Story' },
    { title: 'Bicycle Thieves' },
    { title: 'The Kid' },
    { title: 'Inglourious Basterds' },
    { title: 'Snatch' },
    { title: '3 Idiots' },
    { title: 'Monty Python and the Holy Grail' },
];