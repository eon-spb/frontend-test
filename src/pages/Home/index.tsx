import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

import Header from 'components/Header';
import Card from 'components/Card';

import styles from './Home.module.scss';
import { ICard } from 'types/types';
import NavPanel from 'components/NavPanel';
import StaticHome from './components/staticHome';

function Home() {
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [cardsData, setCardsData] = useState<ICard[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('movie');
  const [error, setError] = useState('');

  useEffect(() => {
    if (query) {
      setError('');
      fetch(
        `${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}&type=${activeFilter}`
      )
        .then((response) => response.json())
        .then((data: { Search: ICard[]; Error: string }) => {
          if (data.Error) throw new Error(data.Error);
          const res = [...data.Search];
          setCardsData(res.sort((a, b) => (a.Year < b.Year ? 1 : -1)));
        })
        .catch((error) => {
          console.log('Error fetching data films: ', error);
          setError(error.message);
          setCardsData([]);
        });
    } else {
      setCardsData([]);
    }
  }, [query, activeFilter]);

  return (
    <>
      <Header
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        setQuery={setQuery}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        query={query}
      />
      <main className={styles.main}>
        {query ? (
          <>
            <h2 className={styles.search__title}>{'Результаты поиска'}</h2>
            <div className={styles.cards__wrapper}>
              {cardsData.map((cardData, i) => (
                <Card key={i} props={cardData} />
              ))}
            </div>
          </>
        ) : (
          <StaticHome />
        )}
        {error && <h2 className={styles.noResults}>{error}</h2>}
      </main>
      {!isDesktop && (
        <NavPanel
          setIsSearchOpen={setIsSearchOpen}
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />
      )}
    </>
  );
}

export default Home;
