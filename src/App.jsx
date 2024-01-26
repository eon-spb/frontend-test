import axios from "axios";
import { useState, useRef } from "react";
import { Search } from "./components/Search/Search";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import menuImg from "./assets/menu.png";
import logoImg from "./assets/logo.png";

export const API_KEY = "c360273d";

export function App() {
  const [movies, setMovies] = useState([]);
  const [SearchBtnStatus, setSearchBtnStatus] = useState(false);
  const [footerSearch, setFooterSearch] = useState(false);

  const searchRef = useRef();

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

          <Search
            footerSearch={footerSearch}
            getSearchedMovies={getSearchedMovies}
            searchRef={searchRef}
            SearchBtnStatus={SearchBtnStatus}
            setSearchBtnStatus={setSearchBtnStatus}
          />
        </nav>
      </header>

      <Main movies={movies} />

      <Footer setFooterSearch={setFooterSearch} searchRef={searchRef} />
    </div>
  );
}
