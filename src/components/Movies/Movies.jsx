import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({onEditMenu}) {
  return (
    <>
      <header>
        <Header onEditMenu={onEditMenu}/>
      </header>
      <main>
        <SearchForm />
        <MoviesCardList />
        <div className="page__block">
          <button type="button" className="page__block-button">Ещё</button>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Movies;