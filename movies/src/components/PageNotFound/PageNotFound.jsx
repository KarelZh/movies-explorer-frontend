import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="notfound">
      <p className="notfound__error">404</p>
      <p className="notfound__text">Страница не найдена</p>
      <Link to='/' className="notfound__link">Назад</Link>
    </div>
  );
};
export default PageNotFound;