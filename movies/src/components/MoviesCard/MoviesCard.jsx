import card from '../../images/cardimg.svg';
import save from '../../images/saved.svg';

const isLike = false;
const saved = true;


function MoviesCard() {
  return (
    <section className="movie">
      <div className="movie__title">
        <p className="movie__title_text">В погоне за Бенкси</p>
        <p className="movie__title_time">0ч 42м</p>
      </div>
      <img className='movie__img' src={card} alt='Карточка' />
      {saved ? (
        <button className='movie__button'>{isLike ? <img src={save} /> : 'Сохранить'}</button>
      ) : (
        <button className='movie__button'>x</button>
      )}
    </section>
  );
};
export default MoviesCard;