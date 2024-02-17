import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({onEditMenu}) {
  return (
    <>
      <Header onEditMenu={onEditMenu}/>
      <SearchForm />
      <MoviesCardList />
      <button type="button" className="content__button">Ещё</button>
      <Footer />
    </>
  );
};
export default Movies;