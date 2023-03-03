import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NavBar from './NavBar/NavBar';

const HomePage = lazy(() => import('./HomePage/HomePage'));
const DetailsMoviePage = lazy(() =>
  import('./DetailsMoviePage/DetailsMoviePage')
);
const CastPage = lazy(() => import('./CastPage/CastPage'));
const PageReviews = lazy(() => import('./PageReviews/PageReviews'));
const SearchMoviePage = lazy(() =>
  import('./SearchMoviesPage/SearchMoviePage')
);

// import { DetailsMoviePage } from './DetailsMoviePage/DetailsMoviePage';
// import { CastPage } from './CastPage/CastPage';
// import { PageReviews } from './PageReviews/PageReviews';
// import { SearchMoviePage } from './SearchMoviesPage/SearchMoviePage';

export const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loader</p>}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<SearchMoviePage />} />
          <Route path="/movies/:id" element={<DetailsMoviePage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<PageReviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
