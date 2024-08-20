import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { MovieList } from '../../components/MovieList/MovieList'
// import { Search } from "../../components/Search/Search";

const Home = () => {
  return (
    <>
      <Header />
      {/* TODO: Add in Search with query */}
      {/* <Search setMovie={setMovie} /> */}
      <MovieList />
      <Footer />
    </>
  )
}

export default Home
