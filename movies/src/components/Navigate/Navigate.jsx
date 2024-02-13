import { Link, NavLink } from 'react-router-dom';
import profile from '../../images/profile.svg';

const isLoged = true;

function Navigate() {
  return (
    <div className={`navigate ${isLoged ? 'navigate_opened' : ''}`}>
      <div className='navigate__popup'>
        <button className="navigate__exit">+</button>
        <div className="navigate__nav">
          <NavLink to='/' className={({isActive}) => `navigate__nav__home ${isActive ? "navigate__nav__home_active" : ""}`}>Главная</NavLink>
          <NavLink to='/movies' className={({isActive}) => `navigate__nav__movies ${isActive ? "navigate__nav__home_active" : ""}`}>Фильмы</NavLink>
          <NavLink to='/saved-movies' className={({isActive}) => `navigate__nav__saved ${isActive ? "navigate__nav__home_active" : ""}`}>Сохранённые фильмы</NavLink>
        </div>
        <Link to='/profile' className='navigate__link'>
        <div className='navigate__account'>
          <p className='navigate__account__text'>Аккаунт</p>
            <div className='navigate__profile'>
              <img className='navigate__profile__image' src={profile} alt='Иконка профиля'/>
            </div>
        </div>
        </Link>
      </div>
    </div>
  );
};
export default Navigate;