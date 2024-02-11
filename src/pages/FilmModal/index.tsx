import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import BookmarkButton from './components/BookmarkButton/BookmarkButton';
import ShareButton from './components/ShareButton/ShareButton';
import WatchButton from './components/WatchButton/WatchButton';
import Loading from 'components/Loading';

import styles from './FilmModal.module.scss';

import { IDetails } from 'types/types';

function FilmModal() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [filmData, setFilmData] = useState<IDetails | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    if (id) {
      fetch(
        `${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}&plot=full`,
        {
          signal: controller.signal,
        }
      )
        .then((response) => response.json())
        .then((data: IDetails) => {
          setFilmData(data);
        })
        .catch((error) => {
          console.log('Error fetching data films: ', error);
        });
    }
    return () => controller.abort();
  }, [id]);

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  function handleNavigate() {
    navigate('/');
  }

  return (
    <>
      <div className={styles.overlay} onClick={handleNavigate}></div>

      <div className={styles.details}>
        <div className={styles.gradient}></div>
        <button type="button" onClick={handleNavigate} className={styles.closeBtn}></button>
        {!filmData && <Loading />}
        {filmData && (
          <>
            <img src={filmData.Poster} alt={filmData.Title} className={styles.poster} />
            <div className={styles.details__info}>
              <div className={styles.details__general}>
                <h1 className={styles.details__title}>{filmData.Title}</h1>
                <div className={styles.details__controls}>
                  <WatchButton />
                  <BookmarkButton />
                  <ShareButton />
                </div>
                <div className={styles.details__rating}>
                  <div className={styles.rating}>
                    <img src="/icons/star.svg" alt="rating" className={styles.rating__icon} />
                    <span>{filmData.imdbRating}</span>
                  </div>
                  <div className={styles.year}>{filmData.Year}</div>
                </div>
              </div>

              <div className={styles.plot__wrapper}>
                <div className={styles.plot__age}>{filmData.Rated}</div>
                <div className={styles.plot__genres}>
                  {filmData.Genre &&
                    filmData.Genre.split(', ').map((genre, i) => {
                      return (
                        <span key={i} className={styles.plot__genre}>
                          {genre}
                        </span>
                      );
                    })}
                </div>
                <p className={styles.plot__text}>{filmData.Plot}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default FilmModal;
