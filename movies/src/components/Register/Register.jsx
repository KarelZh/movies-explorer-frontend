import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Register() {
  return (
    <main className='register'>
      <section className="register__section">
        <Link to='/' className='register__logo__link'><img className='register__logo' src={logo} alt='Логотип' /></Link>
        <h1 className='register__greetings'>Добро пожаловать!</h1>
        <form action="" className='register__form'>
          <label className='register__form_type_text'>Имя</label>
          <input className='register__form_type_name' type='text' minLength="2" maxLength="30" placeholder='Имя' required/>
          <label className='register__form_type_text'>E-mail</label>
          <input className='register__form_type_email' type='email' minLength="2" maxLength="30" placeholder='E-mail' required/>
          <label className='register__form_type_text'>Пароль</label>
          <input className='register__form_type_password' type='password' minLength="2" maxLength="30" placeholder='Пароль' required/>
          <span className='register__form_type_span'></span>
          <button type='submit' className='register__submit'>Зарегистрироваться</button>
        </form>
        <div className='register__footer'>
          <p className='register__footer__text'>Уже зарегистрированы?</p>
          <Link to='/signin' className='register__footer__link'>Войти</Link>
        </div>
      </section>
    </main>
  );
};
export default Register;