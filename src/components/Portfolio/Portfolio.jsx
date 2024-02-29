function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__text">Портфолио</p>
      <div className="portfolio__info">
        <a href="https://KarelZh.github.io/how-to-learn/index.html" target="_blank"  className="portfolio__website">
          <p className="portfolio__static">Статичный сайт</p>
          <p className="portfolio__arrow">↗</p>
        </a>
        <a href="https://KarelZh.github.io/russian-travel/index.html" target="_blank" className="portfolio__website">
          <p className="portfolio__adaptiv">Адаптивный сайт</p>
          <p className="portfolio__arrow">↗</p>
        </a>
        <a href="https://KarelZh.github.io/mesto/index.html" target="_blank" className="portfolio__application">
          <p className="portfolio__static">Одностраничное приложение</p>
          <p className="portfolio__arrow">↗</p>
        </a>
      </div>
    </section>
  );
};
export default Portfolio;