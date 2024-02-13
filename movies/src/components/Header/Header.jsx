import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'
import profile from '../../images/profile.svg'
import nav from '../../images/navigate.svg';

let isState = false;
let isReg = true;

function Header() {
  return (
    <>
      {isState ? (
        <div className='header'>
          <Link to='/'><img className="header__logo" src={logo} alt="Главная страница" /></Link>
          <div className='header__nav'>
            <Link to='signup' className='header__signup'>Регистрация</Link>
            <Link to='/signin' className='header__signin'>Войти</Link>
          </div>
        </div>
          ) : (
            <div className={`${isReg ? 'header' : 'header__background'}`}>
              <Link to='/'><img className="header__logo" src={logo} alt="Главная страница" /></Link>
              <button className='header__button'><img src={nav} alt='Кнопка навигации' className={`${isReg ? 'header__navigate' : 'header__nav__background'}`}/></button>
              <div className='header__object'>
                <NavLink to='/movies' className={({isActive}) => `header__movies ${isActive ? "header__movies_active" : ""}`}>Фильмы</NavLink>
                <NavLink to='/saved-movies' className={({isActive}) => `header__saved ${isActive ? "header__saved_active" : ""}`}>Сохранённые фильмы</NavLink>
                <Link to='/profile' className='header__profile__link'><p className='header__profile'>Аккаунт</p>
                <div className={`${isReg ? 'header__profile_logo' : 'header__state'}`}>
                  <img className='header__profile_image' src={profile} alt='Иконка профиля'/>
                </div></Link>
              </div>
        </div>
        )}
    </>
  );
}

export default Header;