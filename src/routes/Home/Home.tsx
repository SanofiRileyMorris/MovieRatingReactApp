import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MovieList } from "../../components/MovieList/MovieList";
import { Search } from "../../components/Search/Search";

const Home = () => {

    const [movie, setMovie] = useState("");

    return (
        <>
            <Header />
            <Search setMovie={setMovie} />
            <MovieList movie={movie} />
            <Footer />
        </>
    );
};

export default Home;
