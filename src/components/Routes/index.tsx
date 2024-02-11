import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from 'pages/Home';
import FilmModal from 'pages/FilmModal';
import NotFound from 'pages/NotFound';

function AppRoutes(): JSX.Element {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
    <>
      <Routes location={previousLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {previousLocation && (
        <Routes>
          <Route path="/film/:id" element={<FilmModal />} />
        </Routes>
      )}
    </>
  );
}

export default AppRoutes;
