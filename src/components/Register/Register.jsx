import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Register() {
  return (
    <main className='register'>
      <section className="register__section">
        <Link to='/' className='register__section-link'><img className='register__logo' src={logo} alt='Логотип' /></Link>
        <h1 className='register__greetings'>Добро пожаловать!</h1>
        <form className='register__form'>
          <label className='register__form-text'>Имя</label>
          <input className='register__form-name' type='text' minLength="2" maxLength="30" placeholder='Имя' required/>
          <label className='register__form-text'>E-mail</label>
          <input className='register__form-email' type='email' minLength="2" maxLength="30" placeholder='E-mail' required/>
          <label className='register__form-text'>Пароль</label>
          <input className='register__form-password' type='password' minLength="2" maxLength="30" placeholder='Пароль' required/>
          <span className='register__form-span'></span>
          <button type='submit' className='register__submit'>Зарегистрироваться</button>
        </form>
        <div className='register__footer'>
          <p className='register__footer-text'>Уже зарегистрированы?</p>
          <Link to='/signin' className='register__footer-link'>Войти</Link>
        </div>
      </section>
    </main>
  );
};
export default Register;