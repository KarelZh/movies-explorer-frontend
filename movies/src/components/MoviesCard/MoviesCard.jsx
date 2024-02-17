import card from '../../images/cardimg.svg';
import save from '../../images/saved.svg';

const isLike = false;
const saved = true;


function MoviesCard() {
  return (
    <main className="movie">
      <div className="movie__title">
        <h2 className="movie__title_text">В погоне за Бенкси</h2>
        <p className="movie__title_time">0ч 42м</p>
      </div>
      <img className='movie__img' src={card} alt='Изображение фильма' />
      {saved ? (
        <button type='button' className='movie__button'>{isLike ? <img src={save} /> : 'Сохранить'}</button>
      ) : (
        <button type='button' className='movie__button'>x</button>
      )}
    </main>
  );
};
export default MoviesCard;