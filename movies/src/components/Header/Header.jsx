import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'
import profile from '../../images/profile.svg'
import nav from '../../images/navigate.svg';

let isState = false;
let isReg = true;


function Header({onEditMenu}) {
  return (
    <>
      {isState ? (
        <section className='header'>
          <Link to='/'><img className="header__logo" src={logo} alt="Главная страница" /></Link>
          <div className='header__nav'>
            <Link to='signup' className='header__signup'>Регистрация</Link>
            <Link to='/signin' className='header__signin'>Войти</Link>
          </div>
        </section>
          ) : (
            <section className={`${isReg ? 'header' : 'header-background'}`}>
              <Link to='/'><img className="header__logo" src={logo} alt="Главная страница" /></Link>
              <button type='button' onClick={onEditMenu} className='header__button'><img src={nav} alt='Кнопка навигации' className={`${isReg ? 'header__navigate' : 'header__nav__background'}`}/></button>
              <nav className='header__object'>
                <NavLink to='/movies' className={({isActive}) => `header__movies ${isActive ? "header__movies_active" : ""}`}>Фильмы</NavLink>
                <NavLink to='/saved-movies' className={({isActive}) => `header__saved ${isActive ? "header__saved_active" : ""}`}>Сохранённые фильмы</NavLink>
                <Link to='/profile' className='header__profile-link'><p className='header__profile'>Аккаунт</p>
                <div className={`${isReg ? 'header__profile-logo' : 'header__state'}`}>
                  <img className='header__profile-image' src={profile} alt='Иконка профиля'/>
                </div></Link>
              </nav>
            </section>
        )}
    </>
  );
}

export default Header;