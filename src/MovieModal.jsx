import React, {useEffect} from 'react';
import star from './image/star.png';
import cancel from './image/Cancel.png';
import play from './image/play.png';
import share from './image/share.png';
import bookmark from './image/Bookmark.png';
import s from "./modules/Modal.module.css"

const MovieModal = ({ movie, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <>
    <div className={s.modal_background}></div>
    <div className={s.modal}>
      <div className={s.content}>
        <button className={s.close_button} onClick={onClose}><img src={cancel} alt="закрыть модалку" /></button>
            <img src={movie.Poster} alt={movie.Title} />
        <ul className={s.info}>
            
          <div className={s.film_name}>{movie.Title}</div>
          <li className={s.video_container}>
            <a className={s.watch}>
                <img src={play} alt='смотреть' /> Смотреть
            </a>
            <div className={s.other_items}>
              <img src={bookmark} alt='в избранное' />
              <img src={share} alt='поделиться' />         
            </div>  
          </li>
          <div className={s.title}>
            <div className={s.suptitles}> 
              <li className={s.rate}>
                <img src={star} alt='оценка imdb' />
                {movie.imdbRating ? movie.imdbRating : 'Недостаточно реакций'}
                </li>
                <li className={s.year}>{movie.Year}</li>              
            </div> 
            <ul className={s.genreList}>
              {movie.Genre.split(',').map((genre, index) => (
                <li key={index} className={s.genre}>{genre.trim()}</li>
              ))}
            </ul>
            <div className={s.plot}>{movie.Plot}</div>
          </div>      
        </ul>
      </div>
    </div>
  </>
  );
};

export default MovieModal;