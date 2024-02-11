import React, { useState, useEffect } from 'react';
import name from '../image/Logo.png';
import vector from '../image/Vector.png';
import bookmark from '../image/Bookmark.png';
import arrow from '../image/Arrow.png';
import profile from '../image/profile.png';
import cancel from '../image/Cancel.png';
import s from "../modules/Header.module.css"


export const Header = ({ isActive, setSearchQuery, searchQuery, searchMovie, clearSearch }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const isHideElements = isActive ? false : true && windowWidth <= 744 ;

  return (
  <header className={s.header}>
    <div className={s.container}>
      <div className={s.logo} style={{ display: isHideElements ? 'none' : 'flex' }}>
        <h1><img src={vector} alt='меню' /></h1>
        <h2><img src={name} alt='название' /></h2>   
      </div>
      <ul className={s.list}>
        <a href='/'>Главная</a>
        <a href='/' className={s.active}>Фильмы</a>
        <a href='/'>Сериалы</a>
      </ul>
      <div className={s.search_movies}>
        <>
        {!isActive && (
          <input type="text" placeholder="Поиск по сайту" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => {
            if (e.key === 'Enter') {
              searchMovie(searchQuery);
            }
          }}/>
        )}
        
        </>
        
        <button className={s.search_button} onClick={clearSearch}><img src={cancel} className={s.cancel} alt="очистисть" /></button>
      </div>
      {!isActive && (
      <button className={s.clearSearch} onClick={clearSearch}>Очистисть</button>
      )}
        <>
        <ul className={s.profile} style={{ display: isHideElements ? 'none' : 'flex' }}>
        <li className={s.profile_bookmark}>
          <img src={bookmark} alt='избранное' />
        </li> 
        <li>
          <img src={profile} alt='фото профиля' />
        </li> 
        <li className='other'>
          <img src={arrow} alt='еще' />
        </li> 
      </ul>
        </>    
    </div>  
  </header>
  )
}



export default Header