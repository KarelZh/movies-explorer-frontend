import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Register() {
  return (
    <section className="register">
      <Link to='/' className='register__logo__link'><img className='register__logo' src={logo} alt='Логотип' /></Link>
      <p className='register__greetings'>Добро пожаловать!</p>
      <form action='' className='register__form'>
        <p className='register__form_type_text'>Имя</p>
        <input className='register__form_type_name' type='text' minLength="2" maxLength="30" required/>
        <p className='register__form_type_text'>E-mail</p>
        <input className='register__form_type_email' type='email' minLength="2" maxLength="30" required/>
        <p className='register__form_type_text'>Пароль</p>
        <input className='register__form_type_password' type='password' minLength="2" maxLength="30" required/>
        <span className='register__form_type_span'></span>
        <button className='register__submit'>Зарегистрироваться</button>
      </form>
      <div className='register__footer'>
        <p className='register__footer__text'>Уже зарегистрированы?</p>
        <Link to='/signin' className='register__footer__link'>Войти</Link>
      </div>
    </section>
  );
};
export default Register;