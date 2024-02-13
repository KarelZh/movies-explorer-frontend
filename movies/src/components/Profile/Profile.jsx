import Header from "../Header/Header";

const isState = true;

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <p className="profile__name">Привет, Евгений!</p>
        <form action="" className="profile__form">
          <div className="profile__form__block">
            <p className="profile__form__text">Имя</p>
            <input className="profile__form_type_name" type="text" minLength='2' maxLength='30' required />
          </div>
          <div className="profile__form__section">
            <p className="profile__form__text">E-mail</p>
            <input className="profile__form_type_email" type="email" minLength='2' maxLength='30' required/>
          </div>
          {isState ? (    
            <>   
              <button className="profile__form_type_redaction">Редактировать</button>
              <button className="profile__form_type_exit">Выйти из аккаунта</button>
            </>   
            ) : (
              <>
                <span className="profile__form_type_span"></span>
                <button className="profile__form_type_submit">Сохранить</button>
              </>
            )}
        </form>
      </section>
    </>
  );
};
export default Profile;