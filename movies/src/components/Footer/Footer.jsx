function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__info">
        <p className="footer__year">© 2024</p>
        <ul className="footer__teacher">
          <li className="footer__yandex">Яндекс.Практикум</li>
          <li><a href="https://github.com/" target="_blank" className="footer__git">Github</a></li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;