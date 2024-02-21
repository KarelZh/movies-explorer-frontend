import promo from '../../images/promo-img.svg';

function Promo() {
  return (
    <section className="promo">
      <img className="promo__image" src={promo} alt="Планета" />
      <div className='promo__info'>
        <h1 className='promo__info-project'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className='promo__info-text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <div className='promo__info-border'>
          <a href='#about' className='promo__info-nav'>Узнать больше</a>
        </div>
      </div>
    </section>
  );
}

export default Promo;