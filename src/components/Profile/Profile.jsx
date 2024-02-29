import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";


const isState = true;

function Profile({onEditMenu}) {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <Header onEditMenu={onEditMenu}/>
      </header>
      <main>
        <section className="profile">
          <h1 className="profile__name">Привет, Евгений!</h1>
          <form className="profile__form">
            <div className="profile__form-block">
              <label className="profile__form-text">Имя</label>
              <input className="profile__form-block-name" type="text" minLength='2' maxLength='30' placeholder="Имя" required />
            </div>
            <div className="profile__form-section">
              <label className="profile__form-text">E-mail</label>
              <input className="profile__form-section-email" type="email" minLength='2' maxLength='30' placeholder="E-mail" required/>
            </div>
            {isState ? (    
              <>   
                <button type="button" className="profile__form-redaction">Редактировать</button>
                <button onClick={() => {navigate('/')}} className="profile__form-exit">Выйти из аккаунта</button>
              </>   
              ) : (
                <>
                  <span className="profile__form_type_span"></span>
                  <button type="submit" className="profile__form_type_submit">Сохранить</button>
                </>
              )}
          </form>
        </section>
      </main>
    </>
  );
};
export default Profile;