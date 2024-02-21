import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Login() {
  return (
    <main className='login'>
      <section className="login__section">
        <Link to='/' className='login__section-link'><img className='login__logo' src={logo} alt='Логотип' /></Link>
        <h1 className='login__greetings'>Рады видеть!</h1>
        <form className='login__form'>
          <label className='login__form-text'>E-mail</label>
          <input className='login__form-email' type='email' minLength="2" maxLength="30" placeholder='E-mail' required/>
          <label className='login__form-text'>Пароль</label>
          <input className='login__form-password' type='password' minLength="2" maxLength="30" placeholder='Пароль' required/>
          <span className='login__form-span'></span>
          <button type='submit' className='login__submit'>Войти</button>
        </form>
        <div className='login__footer'>
          <p className='login__footer-text'>Ещё не зарегистрированы?</p>
          <Link to='/signup' className='login__footer-link'>Регистрация</Link>
        </div>
      </section>
    </main>
  );
};
export default Login;