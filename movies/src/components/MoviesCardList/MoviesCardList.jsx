import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";



function MoviesCardList() {
  return (
    <main className="content">
      <ul className="content__movie">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
    </main>
  );
};
export default MoviesCardList;