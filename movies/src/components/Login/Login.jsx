import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Login() {
  return (
    <section className="login">
      <Link to='/' className='login__logo__link'><img className='login__logo' src={logo} alt='Логотип' /></Link>
      <p className='login__greetings'>Рады видеть!</p>
      <form action='' className='login__form'>
        <p className='login__form_type_text'>E-mail</p>
        <input className='login__form_type_email' type='email' minLength="2" maxLength="30" required/>
        <p className='login__form_type_text'>Пароль</p>
        <input className='login__form_type_password' type='password' minLength="2" maxLength="30" required/>
        <span className='login__form_type_span'></span>
        <button className='login__submit'>Войти</button>
      </form>
      <div className='login__footer'>
        <p className='login__footer__text'>Ещё не зарегистрированы?</p>
        <Link to='/signup' className='login__footer__link'>Регистрация</Link>
      </div>
    </section>
  );
};
export default Login;