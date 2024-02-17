import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({onEditMenu}) {
  return (
    <>
      <Header onEditMenu={onEditMenu}/>
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
};
export default SavedMovies;