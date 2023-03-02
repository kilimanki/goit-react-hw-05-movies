import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { searchMovie } from 'services/getFetch';
import css from './HomePage.module.css';

export const HomePage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getFetch = async () => {
      try {
        const { data } = await searchMovie();
        const arrayWithName = data.results.map(item => {
          const getName = item?.title ?? item?.name;

          return { text: getName, id: item.id, backdrop: item.poster_path };
        });
        setMovies(prevState => {
          return [...prevState, ...arrayWithName];
        });
      } catch (error) {
        console.log(error);
      }
    };
    getFetch();
  }, []);

  const elements = movies.map(item => {
    return (
      <Link
        key={item.id}
        className={css.item}
        to={`movies/${item.id}`}
        state={{ from: location }}
      >
        <li>
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.backdrop}`}
            alt={item.name}
            className={css.image}
          />
          <p className={css.title}> {item.text}</p>
        </li>
      </Link>
    );
  });
  return (
    <>
      <h2>Trending today</h2>
      <ul className={css.items}>{elements}</ul>
    </>
  );
};
