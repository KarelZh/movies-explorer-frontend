function FilterCheckbox() {
  return (
    <div className="checkbox">
      <label className="checkbox__label" for="checkbox">
        <input className="checkbox__input" type="checkbox" id="checkbox"/>
        <span className="checkbox__span">Короткометражки</span>
      </label>
      <p className="checkbox__border" />
    </div>
  );
};
export default FilterCheckbox;