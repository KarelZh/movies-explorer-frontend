function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__text">Портфолио</p>
      <div className="portfolio__info">
        <div className="portfolio__website">
          <p className="portfolio__static">Статичный сайт</p>
          <p className="portfolio__arrow">↗</p>
        </div>
        <div className="portfolio__website">
          <p className="portfolio__static">Адаптивный сайт</p>
          <p className="portfolio__arrow">↗</p>
        </div>
        <div className="portfolio__application">
          <p className="portfolio__static">Одностраничное приложение</p>
          <p className="portfolio__arrow">↗</p>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;