import foto from '../../images/foto.svg';

function AboutMe() {
  return (
    <div className="aboutMe">
      <p className="aboutMe__info">Студент</p>
      <p className="aboutMe__border" />
      <div className='aboutMe__profile'>
        <div>
          <p className="aboutMe__name">Евгений</p>
          <p className="aboutMe__proffesion">Фронтенд-разработчик, 26 лет</p>
          <p className="aboutMe__text">Я родился в Ярославле и не так давно переехал в Санкт-Петербург.
            Получил среднее профессиональное образование по специальности "Компьютерные сети" и в данный момент
            получаю высшее по специальности "Экономическая безопасность".</p>
          <p className='about__git'>Github</p>
        </div>
        <img className="aboutMe__foto" src={foto} alt="Фотография"/>
      </div>
    </div>
  );
};
export default AboutMe;