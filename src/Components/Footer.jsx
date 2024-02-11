import React from 'react';
import search from '../image/Stroke.png';
import home from '../image/fixed/home.png';
import films from '../image/fixed/films.png';
import serials from '../image/fixed/serials.png';
import bookmarkfooter from '../image/fixed/bookmark.png';
import s from "../modules/Footer.module.css"


const Footer = ({ isActive, toggleActive }) => {
  return (
    <footer className={s.footer}>
      <ul className={s.footer_container}>
        <a href='/'>
          <li> Главная
            <img src={home} alt='Главная' />
          </li>
        </a>
        <a href='/'>
          <li> Фильмы
            <img src={films} alt='Фильмы' />
          </li>
        </a>
        <a href='/'>
          <li> Сериалы
            <img src={serials} alt='Сериалы' />
          </li>
        </a>
        <a onClick={toggleActive} className={isActive ? 'search active' : 'search'}>
          <li> Поиск
            <img src={search} alt='Поиск' />
          </li>
        </a>
        <a href='/'>
          <li> Избранное
            <img src={bookmarkfooter} alt='Избранное' />
          </li>
        </a>
      </ul>
    </footer>
  );
}

export default Footer;
