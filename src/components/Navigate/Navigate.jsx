import { Link, NavLink } from 'react-router-dom';
import profile from '../../images/profile.svg';

const isLoged = false;

function Navigate({isOpen, onClose}) {
  return (
    <section className={`navigate ${isOpen ? 'navigate_opened' : ''}`}>
      <div className='navigate__popup'>
        <button type='button' onClick={onClose} className="navigate__exit">+</button>
        <div className="navigate__nav">
          <NavLink to='/' className={({isActive}) => `navigate__nav-home ${isActive ? "navigate__nav-home navigate__nav-home_active" : ""}`}>Главная</NavLink>
          <NavLink to='/movies' className={({isActive}) => `navigate__nav-movies ${isActive ? "navigate__nav-home navigate__nav-home_active" : ""}`}>Фильмы</NavLink>
          <NavLink to='/saved-movies' className={({isActive}) => `navigate__nav-saved ${isActive ? "navigate__nav-home navigate__nav-home_active" : ""}`}>Сохранённые фильмы</NavLink>
        </div>
        <Link to='/profile' className='navigate__link'>
        <div className='navigate__account'>
          <p className='navigate__account-text'>Аккаунт</p>
            <div className='navigate__profile'>
              <img className='navigate__profile-image' src={profile} alt='Иконка профиля'/>
            </div>
        </div>
        </Link>
      </div>
    </section>
  );
};
export default Navigate;