// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import menuImg from "./assets/menu.png";
import logoImg from "./assets/logo.png";
import searchImg from "./assets/search.png";
import markImg from "./assets/mark.png";
import avatarImg from "./assets/avatar.jpg";
import homeImg from "./assets/home.png";
import moviesImg from "./assets/movies.png";
import seriesImg from "./assets/series.png";
import searchFooterImg from "./assets/search-footer.png";
import favoritesImg from "./assets/favorites.png";
import closeImg from "./assets/close.png";
import { SelectedMovie } from "./components/SelectedMovie/SelectedMovie";
import { MovieCard } from "./components/MovieCard/MovieCard";

// ?? get search title
// ** `http://www.omdbapi.com/?apikey=${API_KEY}=${title}`

// ?? get search id
// ** `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`

const API_KEY = "c360273d";

export function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [search, setSearch] = useState("spider man");
  const [timeoutId, setTimeoutId] = useState();
  const [showDetails, setShowDetails] = useState(false);
  const [SearchBtnStatus, setSearchBtnStatus] = useState(false);
  const [footerSearch, setFooterSearch] = useState(false);

  const searchRef = useRef();

  const showMoviesListbyFooter = () => {
    setFooterSearch(false);
  };

  const clearSearchInput = () => {
    console.log("@clearSearch");
    setSearch("");
    setSearchBtnStatus(false);
    searchRef.current.focus();
  };

  const showSearchByFooter = () => {
    setFooterSearch(true);
    searchRef.current.focus();
  };

  const getSearchedMovies = async (title) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`
    );
    setMovies(response.data.Search);
    if (title) {
      setSearchBtnStatus(true);
    } else {
      setSearchBtnStatus(false);
    }
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

  const getCurrentMovie = async (id) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );
    setSelectedMovie(response.data);
    document.body.classList.add("fixed");
  };

  useEffect(() => {
    getSearchedMovies(search);
  }, []);

  return (
    <div className="container">
      <header>
        <nav>
          <div className={footerSearch ? "logo hide__logo" : "logo"}>
            <img src={menuImg} alt="burger icon" />
            <img src={logoImg} alt="logo movies eoh" />
          </div>

          <ul>
            <li>Главная</li>
            <li className="active">Фильмы</li>
            <li>Сериалы</li>
          </ul>

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
                  SearchBtnStatus
                    ? "search__btn show__search__btn"
                    : "search__btn"
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
                footerSearch
                  ? "mark__avatar__imgs hide__imgs"
                  : "mark__avatar__imgs"
              }
            >
              <img className="mark" src={markImg} alt="book mark" />
              <img className="avatar" src={avatarImg} alt="avatar user" />
            </div>
          </div>
        </nav>
      </header>

      <main>
        <h2>Результаты поиска: </h2>
        {showDetails && (
          <SelectedMovie
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            setShowDetails={setShowDetails}
          />
        )}

        <div className="movies__list">
          {movies ? (
            movies
              .sort((a, b) => b.Year - a.Year)
              .map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  getCurrentMovie={getCurrentMovie}
                  setShowDetails={setShowDetails}
                />
              ))
          ) : (
            <div className="noresult__wrapper">
              <div>Фильмы не найдены</div>
              <div className="noresult__message">
                вводите название на английском
              </div>
            </div>
          )}
        </div>
      </main>

      <footer>
        <nav>
          <ul>
            <li>
              <button className="footer__btn">
                <img src={homeImg} alt="" />
                <p>Главная</p>
              </button>
            </li>
            <li>
              <button
                className="footer__btn active"
                onClick={showMoviesListbyFooter}
              >
                <img src={moviesImg} alt="" />
                <p>Фильмы</p>
              </button>
            </li>
            <li>
              <button className="footer__btn ">
                <img src={seriesImg} alt="" />
                <p>Сериалы</p>
              </button>
            </li>
            <li>
              <button className="footer__btn" onClick={showSearchByFooter}>
                <img src={searchFooterImg} alt="" />
                <p>Поиск</p>
              </button>
            </li>
            <li>
              <button className="footer__btn">
                <img src={favoritesImg} alt="" />
                <p>Избранное</p>
              </button>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
