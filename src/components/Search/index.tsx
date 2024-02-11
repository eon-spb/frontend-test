import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

import styles from './Search.module.scss';
import { debounce } from 'helpers/debounce';
import SearchSvg from './components/SearchSvg';

type TProps = {
  onSearchChange: (query: string) => void;
  setIsSearchOpen?: (isOpen: boolean) => void;
  query: string;
};

function Search({ onSearchChange, setIsSearchOpen, query }: TProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  const [querySearch, setQuerySearch] = useState(query);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(event.target.value);
    debouncedSearchChange(event);
  };

  const clearInput = () => {
    setQuerySearch('');
    onSearchChange('');
  };

  const clearAndClose = () => {
    if (setIsSearchOpen) {
      setIsSearchOpen(false);
    }
    clearInput();
  };

  const debouncedSearchChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  }, 800);

  useEffect(() => {
    if (inputRef.current && !isDesktop) {
      inputRef.current.focus();
    }
  }, [isDesktop]);

  return (
    <>
      <div className={styles.search__wrapper}>
        <input
          type="search"
          className={styles.search}
          ref={inputRef}
          required
          value={querySearch}
          onChange={(e) => handleInputChange(e)}
        />
        <SearchSvg className={styles.search__preIcon} />

        <div className={styles.search__placeholder}>
          <SearchSvg className={styles.search__icon} />
          <div className={styles.search__text}>Поиск по сайту</div>
        </div>

        <span className={styles.search__clear} onClick={clearInput}></span>
      </div>
      {!isDesktop && (
        <span className={styles.clearBtn} onClick={clearAndClose}>
          Очистить
        </span>
      )}
    </>
  );
}

export default Search;
