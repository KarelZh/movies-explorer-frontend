function Footer() {
  return (
    <section className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__info">
        <p className="footer__year">© 2024</p>
        <div className="footer__teacher">
          <a href="https://practicum.yandex.ru/" target="_blank" className="footer__yandex">Яндекс.Практикум</a>
          <a href="https://github.com/" target="_blank" className="footer__git">Github</a>
        </div>
      </div>
    </section>
  );
};
export default Footer;