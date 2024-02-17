function Portfolio() {
  return (
    <main className="portfolio">
      <p className="portfolio__text">Портфолио</p>
      <ul className="portfolio__info">
        <a href="https://KarelZh.github.io/how-to-learn/index.html" target="_blank"  className="portfolio__website">
          <li className="portfolio__static">Статичный сайт</li>
          <p className="portfolio__arrow">↗</p>
        </a>
        <a href="https://KarelZh.github.io/russian-travel/index.html" target="_blank" className="portfolio__website">
          <li className="portfolio__adaptiv">Адаптивный сайт</li>
          <p className="portfolio__arrow">↗</p>
        </a>
        <a href="https://KarelZh.github.io/mesto/index.html" target="_blank" className="portfolio__application">
          <li className="portfolio__static">Одностраничное приложение</li>
          <p className="portfolio__arrow">↗</p>
        </a>
      </ul>
    </main>
  );
};
export default Portfolio;