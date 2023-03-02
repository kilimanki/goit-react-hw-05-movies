import { useState, useEffect } from 'react';
import { searchField } from 'services/getFetch';
import {
  useSearchParams,
  Link,
  useParams,
  useLocation,
} from 'react-router-dom';
import { FormSearchMovie } from 'components/FormMovie/FormMovie';
import { getReviews } from 'services/getFetch';
import imgs from '../../Images/theRock.jpg';
import css from './SearchMoviePage.module.css';
export const SearchMoviePage = () => {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const search = searchParams.get('search');
  useEffect(() => {
    const getMovie = async () => {
      try {
        const { data } = await searchField(search);
        setItems(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    if (search) {
      getMovie();
    }
  }, [search]);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const { data } = await getReviews(id);
        setItems(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
  }, [id]);

  const elements = items.map(item => {
    return (
      <li className={css.item} key={item.id}>
        <Link to={`${item.id}`} state={{ from: location }}>
          <h3>{item.original_title}</h3>
          <img
            src={
              item.backdrop_path === null
                ? `${imgs}`
                : `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
            }
            alt=""
            className={css.image}
          />
          <div className={css.info}>
            <h3>Overiew:</h3>
            <p> {item.overview}</p>
          </div>
        </Link>
      </li>
    );
  });
  const updateSearch = () => {
    setSearchParams({
      search,
    });
  };
  return (
    <>
      <FormSearchMovie submit={updateSearch} />
      {items.length === 0 && search && <div>Nothing was found</div>}
      {items.length > 0 && <ul>{elements}</ul>}
    </>
  );
};
