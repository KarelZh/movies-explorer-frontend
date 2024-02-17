import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <main className="search">
      <form className="search__form">
        <div className="search__form__filter">
          <input type="text" className="search__input" placeholder="Фильм" required/>
          <button type="button" className="search__button">Поиск</button>
        </div>
        <FilterCheckbox />
      </form>
    </main>
  );
};
export default SearchForm;