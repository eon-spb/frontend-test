import { useEffect, useState } from "react";
import searchImg from "../../assets/search.png";
import markImg from "../../assets/mark.png";
import avatarImg from "../../assets/avatar.jpg";
import dropdownImg from "../../assets/dropdown.png";
import closeImg from "../../assets/close.png";
import "./Search.css";

export function Search({
  footerSearch,
  getSearchedMovies,
  searchRef,
  SearchBtnStatus,
  setSearchBtnStatus,
}) {
  const [search, setSearch] = useState("spider man");
  const [timeoutId, setTimeoutId] = useState();

  const clearSearchInput = () => {
    setSearch("");
    setSearchBtnStatus(false);
    searchRef.current.focus();
  };

  const searchDebounce = (e) => {
    clearTimeout(timeoutId);
    setSearch(e.target.value);
    const timeout = setTimeout(
      () => getSearchedMovies(e.target.value.trim()),
      800
    );
    setTimeoutId(timeout);
  };

  useEffect(() => {
    getSearchedMovies(search);
  }, []);

  return (
    <div className="search__mark_avatar">
      <label className={footerSearch ? "search show__search" : "search"}>
        <img src={searchImg} alt="search image" />
        <input
          className="search__input"
          placeholder="Поиск по сайту"
          value={search}
          onChange={searchDebounce}
          ref={searchRef}
        />
        <button
          className={
            SearchBtnStatus ? "search__btn show__search__btn" : "search__btn"
          }
          onClick={clearSearchInput}
        >
          <img
            src={closeImg}
            alt="close cross"
            className="search__close__btn"
          />
        </button>
      </label>

      <button
        className={
          SearchBtnStatus && footerSearch
            ? "search__btn show__search__btn"
            : "search__btn"
        }
        onClick={clearSearchInput}
      >
        Очистить
      </button>

      <div
        className={
          footerSearch ? "mark__avatar__imgs hide__imgs" : "mark__avatar__imgs"
        }
      >
        <img className="mark" src={markImg} alt="book mark" />
        <img className="avatar" src={avatarImg} alt="avatar user" />
        <img className="dropdown" src={dropdownImg} alt="drop down arrow" />
      </div>
    </div>
  );
}
