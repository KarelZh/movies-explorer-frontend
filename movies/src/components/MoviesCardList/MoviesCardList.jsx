import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";



function MoviesCardList() {
  return (
    <section className="content">
      <div className="content__movie">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
    </section>
  );
};
export default MoviesCardList;