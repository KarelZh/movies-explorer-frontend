import { Link } from "react-router-dom";
import Header from "../Header/Header";

const isState = true;

function Profile({onEditMenu}) {
  return (
    <>
      <Header onEditMenu={onEditMenu}/>
      <main className="profile">
        <h1 className="profile__name">Привет, Евгений!</h1>
        <form action="" className="profile__form">
          <div className="profile__form__block">
            <label className="profile__form__text">Имя</label>
            <input className="profile__form_type_name" type="text" minLength='2' maxLength='30' placeholder="Имя" required />
          </div>
          <div className="profile__form__section">
            <label className="profile__form__text">E-mail</label>
            <input className="profile__form_type_email" type="email" minLength='2' maxLength='30' placeholder="E-mail" required/>
          </div>
          {isState ? (    
            <>   
              <button type="button" className="profile__form_type_redaction">Редактировать</button>
              <Link to='/' className="profile__exit"><button className="profile__form_type_exit">Выйти из аккаунта</button></Link>
            </>   
            ) : (
              <>
                <span className="profile__form_type_span"></span>
                <button type="submit" className="profile__form_type_submit">Сохранить</button>
              </>
            )}
        </form>
      </main>
    </>
  );
};
export default Profile;