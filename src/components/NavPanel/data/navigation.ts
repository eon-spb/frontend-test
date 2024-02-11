import Bookmark from '../components/Bookmark';
import FilmsSvg from '../components/FilmsSvg';
import HomeSvg from '../components/HomeSvg';
import SearchSvg from '../components/SearchSvg';
import SeriesSvg from '../components/SeriesSvg';

export const navPanel = [
  { text: 'Главная', icon: HomeSvg },
  { text: 'Фильмы', icon: FilmsSvg, type: 'movie' },
  { text: 'Сериалы', icon: SeriesSvg, type: 'series' },
  { text: 'Поиск', icon: SearchSvg },
  { text: 'Избранное', icon: Bookmark },
];
