function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <input type="text" className="search__input" placeholder="Фильм" />
        <button className="search__button">Поиск</button>
      </form>
    </section>
  );
};
export default SearchForm;