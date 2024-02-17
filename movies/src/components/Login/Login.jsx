import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Login() {
  return (
    <main className='login'>
      <section className="login__section">
        <Link to='/' className='login__logo__link'><img className='login__logo' src={logo} alt='Логотип' /></Link>
        <h1 className='login__greetings'>Рады видеть!</h1>
        <form action='' className='login__form'>
          <label className='login__form_type_text'>E-mail</label>
          <input className='login__form_type_email' type='email' minLength="2" maxLength="30" placeholder='E-mail' required/>
          <label className='login__form_type_text'>Пароль</label>
          <input className='login__form_type_password' type='password' minLength="2" maxLength="30" placeholder='Пароль' required/>
          <span className='login__form_type_span'></span>
          <button type='submit' className='login__submit'>Войти</button>
        </form>
        <div className='login__footer'>
          <p className='login__footer__text'>Ещё не зарегистрированы?</p>
          <Link to='/signup' className='login__footer__link'>Регистрация</Link>
        </div>
      </section>
    </main>
  );
};
export default Login;