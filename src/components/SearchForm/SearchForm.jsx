import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__form-filter">
          <input type="text" className="search__input" placeholder="Фильм" required/>
          <button type="button" className="search__button">Поиск</button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
};
export default SearchForm;