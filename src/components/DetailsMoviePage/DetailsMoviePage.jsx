import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { detailsMovie } from 'services/getFetch';
import css from './DetailsMoviePage.module.css';
import imgs from '../../Images/theRock.jpg';
export const DetailsMoviePage = () => {
  const location = useLocation();
  const from = location.state?.from || `/`;
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      try {
        const { data } = await detailsMovie(id);
        const genres = data.genres.map(item => {
          return <p key={item.name}>{item.name}</p>;
        });
        setGenres(genres);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [id]);
  const onGetBack = () => {
    navigate(from);
  };
  const {
    backdrop_path,
    original_title,
    vote_average,
    overview,
    release_date,
  } = movie;

  return (
    <>
      <button onClick={onGetBack}> Go back</button>
      <div>
        <img
          src={
            backdrop_path === null
              ? `${imgs}`
              : `https://image.tmdb.org/t/p/w500${backdrop_path}`
          }
          alt="movie"
          height="281px"
        />
        <h2>{original_title}</h2>
        <p>{overview}</p>
        <div>
          <h3>Genres:</h3> {genres}
        </div>
        <h3>Rating:</h3>
        <p>
          {vote_average === undefined ? 'loading' : vote_average.toFixed(1)}
        </p>
        <h3>Release:</h3>
        <p>{release_date}</p>
      </div>
      <div className={css.items}>
        <Link to={`/movies/${id}/cast`} className={css.link} state={{ from }}>
          Cast
        </Link>
        <Link
          to={`/movies/${id}/reviews`}
          className={css.link}
          state={{ from }}
        >
          Reviews
        </Link>
      </div>
      <Outlet />
    </>
  );
};
