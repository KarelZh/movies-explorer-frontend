function FilterCheckbox() {
  return (
    <section className="checkbox">
      <label className="checkbox__label" for="checkbox">
        <input className="checkbox__input" type="checkbox" id="checkbox"/>
        <span className="checkbox__span">Короткометражки</span>
      </label>
    </section>
  );
};
export default FilterCheckbox;