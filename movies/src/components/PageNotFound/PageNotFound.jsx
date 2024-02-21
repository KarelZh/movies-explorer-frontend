
function PageNotFound() {
  return (
    <main className="notfound">
      <p className="notfound__error">404</p>
      <p className="notfound__text">Страница не найдена</p>
      <a href='javascript:history.back()' className="notfound__link">Назад</a>
    </main>
  );
};
export default PageNotFound;