import React from 'react';
import { PopularTop } from '../../data/mockFilms';
import Card from 'components/Card';
import styles from './staticHome.module.scss';

function StaticHome() {
  return (
    <>
      <h2 className={styles.search__title}>{'Популярные'}</h2>
      <div className={styles.static__wrapper}>
        {PopularTop.map((cardData, i) => (
          <Card props={cardData} key={i} />
        ))}
      </div>
      <h2 className={styles.search__title}>{'Недавно просмотренные'}</h2>
      <div className={styles.visited__wrapper}>
        {PopularTop.map((film, i) => {
          return <Card key={i} props={film} />;
        })}
      </div>
    </>
  );
}

export default StaticHome;
