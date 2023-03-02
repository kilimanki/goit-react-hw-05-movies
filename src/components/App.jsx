import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import { HomePage } from './HomePage/HomePage';
import { DetailsMoviePage } from './DetailsMoviePage/DetailsMoviePage';
import { PageCast } from './PageCast/PageCast';
import { PageReviews } from './PageReviews/PageReviews';
import { SearchMoviePage } from './SearchMoviesPage/SearchMoviePage';

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<SearchMoviePage />} />
        <Route path="/movies/:id" element={<DetailsMoviePage />}>
          <Route path="cast" element={<PageCast />} />
          <Route path="reviews" element={<PageReviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};
