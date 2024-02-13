import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function Movies() {
  return (
    <>
      <Header />
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
      <button className="content__button">Ещё</button>
      <Footer />
    </>
  );
};
export default Movies;