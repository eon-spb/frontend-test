import axios from "axios";
import { useState } from "react";
import { SelectedMovie } from "../SelectedMovie/SelectedMovie";
import { MovieCard } from "../MovieCard/MovieCard";
import { API_KEY } from "../../App";
import "./Main.css";

export function Main({ movies }) {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();

  const getCurrentMovie = async (id) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );
    setSelectedMovie(response.data);
    document.body.classList.add("fixed");
  };

  return (
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
  );
}
