import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import MovieModal from './MovieModal';
import star from './image/star.png';

// Фильмы в популярных 
import avatar from './image/films/avatar.png';
import showman from './image/films/showman.png';
import avangers from './image/films/avangers.png';
import malifisient from './image/films/malifisient.png';
import street from './image/films/street.png';
import spiderman from './image/films/spider-man.png';

// Фильмы в просмотренных
import once from './image/films/once.png';
import leon from './image/films/leon.png';
import greenbook from './image/films/greenbook.png';
import hotel from './image/films/hotel.png';
import fantastic from './image/films/fantastic.png';
import kingdom from './image/films/kingdom.png';


import Footer from './Components/Footer';
import Header from './Components/Header';


// Жестко заданный список фильмов
const predefinedMovies = [
  {
    Title: 'Аватар: Путь воды',
    Poster: avatar,
    imdbRating: '9.0'
  },
  {
    Title: 'Величашйий шоумен',
    Poster: showman,
    imdbRating: '8.1'
  },
  {
    Title: 'Мстители',
    Poster: avangers,
    imdbRating : '9.2'
  },
  {
    Title: 'Малифисента',
    Poster: malifisient,
    imdbRating: '8.0'
  },
  {
    Title: 'Волк с Уол-стрит',
    Poster: street,
    imdbRating: '8.4'
  },
  {
    Title: 'Человек-паук: Нет пути домой',
    Poster: spiderman,
    imdbRating: '8.5'
  },
  
];


const predefinedMoviesSecond = [
  {
    Title: 'Однажды в Голливуде',
    Poster: once,
    imdbRating: '8.2'
  },
  {
    Title: 'Леон',
    Poster: leon,
    imdbRating: '9.4'
  },
  {
    Title: 'Зеленая книга',
    Poster: greenbook,
    imdbRating : '9.1'
  },
  {
    Title: 'Отель "Гранд Будапешт',
    Poster: hotel,
    imdbRating: '8.3'
  },
  {
    Title: 'Бесподобный мистер Фокс',
    Poster: fantastic,
    imdbRating: '7.8'
  },
  {
    Title: 'Королевство полной луны',
    Poster: kingdom,
    imdbRating: '8.8'
  },
  
];

// отправляем запрос к OMDb API
async function fetchMovieData(movieTitle, year) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const encodedTitle = encodeURIComponent(movieTitle);
  const https = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodedTitle}&type=movie&y=${year}`;

  try {
    const response = await axios.get(https);

    if (response.data.Search && Array.isArray(response.data.Search)) {
      const movies = response.data.Search;

      // Запрашиваем полные данные о каждом фильме, включая их рейтинги IMDb
        const moviesWithData = await Promise.all(movies.map(async (movie) => {
        const imdbId = movie.imdbID;
        const plot = movie.Plot;
        const movieInfoUrl = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}&f=${plot}`;

        const movieResponse = await axios.get(movieInfoUrl);
        return movieResponse.data;
      }));

      return moviesWithData;
    } else {
      return []; // Если не существует, то возвращаем пустой массив
    }
  } catch (error) {
    console.error('Ошибка в запросе к API:', error);
    return null;
  }
}

function App() {
  const [movieData, setMovieData] = useState(null);
  const [searchResult, setSearchResult] = useState(false);
  const [display, setDisplay] = useState(true);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isActive, setIsActive] = useState(false); 

  // Обработчик события для переключения состояния isActive
  const toggleActive = () => {
    setIsActive(!isActive);
  };
  async function searchMovie(movieTitle, year) {
    const data = await fetchMovieData(movieTitle, year);
    if (data) {
      data.sort((a, b) => parseInt(b.Year) - parseInt(a.Year)); // Фильтруем результаты поиска, чтобы фильмы шли по году выхода(убывание)
      setMovieData(data);
      setDisplay(false);
      setSearchResult(true);
      setSelectedMovieIndex(null); 

      // Фильтруем результаты поиска, оставляя только фильмы, у которых искомое слово стоит первым
      const filteredData = data.filter(movie => {
        const titleWords = movie.Title.toLowerCase().split(' ');
        return titleWords[0].toLowerCase() === movieTitle.toLowerCase();
      });

      setMovieData(filteredData);
    }
  }

  function clearSearch() {
    setSearchQuery('');
    setMovieData(null);
    setDisplay(true);
    
  }
  return (
  <div>   
    <Header isActive={isActive} setSearchQuery={setSearchQuery} searchQuery={searchQuery} searchMovie={searchMovie} clearSearch={clearSearch}/>
    <div className="movie_container">
      <div className="movie_list">
        <h1 className='movie_title'>{movieData ? 'Результат поиска' : 'Популярные'}</h1>
        {(movieData || predefinedMovies).map((movie, index) => (
      <div
        className={`movie ${selectedMovieIndex === index ? 'active' : ''}`}
        key={index}
        onClick={() => {
          if (movieData) { 
            setSelectedMovie(movie);
            setSelectedMovieIndex(index === selectedMovieIndex ? null : index); 
          }
        }}
      >
        <div className='movie_content'>
          <img src={movie.Poster} alt={movie.Title} />
          <li className='movie_text'>{movie.Title}</li>
          <li className='movie_rating'>
            <img src={star} alt='оценка imdb' />{movie.imdbRating ? movie.imdbRating : 'Недостаточно реакций'}
          </li>
        </div>
      </div>
    ))}
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}

      <div className="movie_list_second" style={{ display: display ? 'flex' : 'none' }}>
        <h1 className='movie_suptitle'>{movieData ? '' : 'Недавно просмотренные'}</h1>       
        {(movieData || predefinedMoviesSecond).map((movie, index) => (
          <div className='movie' key={index}>
            <img src={movie.Poster} alt={movie.Title} />
            <li className='movie_text'>{movie.Title}</li>
            <li className='movie_rating'>
              <img src={star} alt='оценка imdb' />{movie.imdbRating ? movie.imdbRating : 'Недостаточно реакций'}
            </li>
          </div>
        ))}
      </div>
    </div>
      
    <Footer isActive={isActive} toggleActive={toggleActive} />
</div>
  );
}

export default App;