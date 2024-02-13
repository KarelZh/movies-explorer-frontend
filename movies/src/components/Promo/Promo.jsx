import promo from '../../images/promo-img.svg';

function Promo() {
  return (
    <section className="promo">
      <img className="promo__image" src={promo} alt="Планета" />
      <div className='promo__info'>
        <p className='promo__info_project'>Учебный проект студента факультета Веб&#8209;разработки.</p>
        <p className='promo__info_text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <div className='promo__info_border'>
          <a href='#about' className='promo__info_nav'>Узнать больше</a>
        </div>
      </div>
    </section>
  );
}

export default Promo;