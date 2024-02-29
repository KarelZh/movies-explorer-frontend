import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({onEditMenu}) {
  return (
    <>
      <header>
        <Header onEditMenu={onEditMenu}/>
      </header>
      <main>
        <SearchForm />
        <MoviesCardList />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default SavedMovies;