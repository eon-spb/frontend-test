import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './Card.module.scss';

import { ICard } from 'types/types';

function Card({ props }: { props: ICard }) {
  const { Title, Poster, imdbID } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    navigate(`/film/${imdbID}`, { state: { previousLocation: location } });
  };

  return (
    <div className={styles.card} onClick={handleNavigate}>
      <img src={Poster} alt={Title} className={styles.poster} />
      <p className={styles.title}>{Title}</p>
      <div className={styles.rating}>
        <img src="/icons/star.svg" alt="rating" className={styles.star} />
        <span>9.0</span>
      </div>
    </div>
  );
}

export default Card;
