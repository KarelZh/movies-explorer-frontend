import card from '../../images/cardImg.jpg';
import save from '../../images/saved.svg';

const isLike = false;
const saved = true;


function MoviesCard() {
  return (
    <section className="movie">
      <div className="movie__title">
        <h2 className="movie__title-text">В погоне за Бенкси</h2>
        <p className="movie__title-time">0ч 42м</p>
      </div>
      <img className='movie__img' src={card} alt='Изображение карточки' />
      {saved ? (
        <button type='button' className='movie__button'>{isLike ? <img src={save} /> : 'Сохранить'}</button>
      ) : (
        <button type='button' className='movie__button'>x</button>
      )}
    </section>
  );
};
export default MoviesCard;