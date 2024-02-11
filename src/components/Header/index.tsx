import React, { useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

import Search from 'components/Search';

import styles from './Header.module.scss';
import { navigation } from './data/navigarion';

type TProps = {
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
  setQuery: (query: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  query: string;
};

function Header({
  isSearchOpen,
  setIsSearchOpen,
  setQuery,
  activeFilter,
  setActiveFilter,
  query,
}: TProps) {
  const isDesktop = useMediaQuery('(min-width: 1440px)');

  const setFilter = (type: string | undefined) => {
    if (type) {
      setActiveFilter(type);
    }
  };

  useEffect(() => {
    if (isDesktop) {
      setIsSearchOpen(false);
    }
  }, [isDesktop]);

  return (
    <header className={isSearchOpen ? `${styles.header} ${styles.header__small}` : styles.header}>
      {!isSearchOpen && (
        <div className={styles.header__left}>
          <div className={styles.burger}>
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
          </div>
        </div>
      )}
      <div className={styles.test__container}>
        {!isSearchOpen && (
          <>
            <img src="/icons/logo.svg" alt="movie logo" className={styles.logo} />
            <nav className={styles.filters}>
              <ul className={styles.navlist}>
                {navigation.map((item, i) => {
                  return (
                    <li
                      onClick={() => setFilter(item.type)}
                      key={i}
                      className={`${styles.navlist__item} ${activeFilter === item.type && styles.navlist__active}`}
                    >
                      {item.text}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </>
        )}
        {isDesktop && <Search onSearchChange={setQuery} query={query} />}
        {isSearchOpen && (
          <Search onSearchChange={setQuery} query={query} setIsSearchOpen={setIsSearchOpen} />
        )}
      </div>
      {!isSearchOpen && (
        <div className={styles.header__right}>
          <button className={styles.bookmarkBtn}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                className={styles.bookmarkBtn__path}
                clipRule="evenodd"
                d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
              />
            </svg>
          </button>
          <div className={styles.profile}>
            <img src="/icons/profile.svg" alt="Profile image" className={styles.profile__img} />
            <button className={styles.profile__menuBtn}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 10L12 15L17 10H7Z"
                  fill="#E6E6E6"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
