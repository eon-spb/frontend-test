import "./MovieCard.css";

export function MovieCard({ movie, getCurrentMovie, setShowDetails }) {
  const { Poster, Title, Year, imdbID } = movie;

  const openMovieDetails = () => {
    getCurrentMovie(imdbID);
    setShowDetails(true);
  };

  return (
    <div className="movie__card" onClick={openMovieDetails}>
      <img
        src={
          Poster !== "N/A"
            ? Poster
            : `https://placehold.co/210x308?text=No+Poster`
        }
      />
      <div className="movie__info">
        <h2>{Title}</h2>
        <h3>{Year}</h3>
      </div>
    </div>
  );
}
