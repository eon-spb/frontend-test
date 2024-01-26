import homeImg from "../../assets/home.png";
import moviesImg from "../../assets/movies.png";
import seriesImg from "../../assets/series.png";
import searchFooterImg from "../../assets/search-footer.png";
import favoritesImg from "../../assets/favorites.png";
import "./Footer.css";

export function Footer({ setFooterSearch, searchRef }) {
  const showMoviesListbyFooter = () => {
    setFooterSearch(false);
  };

  const showSearchByFooter = () => {
    setFooterSearch(true);
    searchRef.current.focus();
  };

  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <button className="footer__btn">
              <img src={homeImg} alt="home icon" />
              <p>Главная</p>
            </button>
          </li>
          <li>
            <button
              className="footer__btn active"
              onClick={showMoviesListbyFooter}
            >
              <img src={moviesImg} alt="movies icon" />
              <p>Фильмы</p>
            </button>
          </li>
          <li>
            <button className="footer__btn ">
              <img src={seriesImg} alt="awesome icon" />
              <p>Сериалы</p>
            </button>
          </li>
          <li>
            <button className="footer__btn" onClick={showSearchByFooter}>
              <img src={searchFooterImg} alt="search lens icon" />
              <p>Поиск</p>
            </button>
          </li>
          <li>
            <button className="footer__btn">
              <img src={favoritesImg} alt="mark icon" />
              <p>Избранное</p>
            </button>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
