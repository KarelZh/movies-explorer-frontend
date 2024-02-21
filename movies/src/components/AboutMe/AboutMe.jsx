import foto from '../../images/foto.png';

function AboutMe() {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__info">Студент</h2>
      <div className='aboutMe__profile'>
        <div>
          <h3 className="aboutMe__name">Евгений</h3>
          <p className="aboutMe__proffesion">Фронтенд-разработчик, 26 лет</p>
          <p className="aboutMe__text">Я родился в Ярославле и не так давно переехал в Санкт-Петербург.
            Получил среднее профессиональное образование по специальности "Компьютерные сети" и в данный момент
            получаю высшее по специальности "Экономическая безопасность".</p>
          <p className='aboutMe__git'>Github</p>
        </div>
        <img className="aboutMe__foto" src={foto} alt="Фотография пользователя"/>
      </div>
    </section>
  );
};
export default AboutMe;