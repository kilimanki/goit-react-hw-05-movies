import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/getFetch';
import css from './PagesReviews.module.css';
export const PageReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await getReviews(id);

        const getInfo = data.results.map(item => {
          return { name: item.author, content: item.content };
        });
        setReviews(getInfo);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [id]);
  const elements = reviews.map(({ name, content }) => {
    return (
      <>
        <li>
          <h3>Author: {name}</h3>
        </li>
        <li>{content}</li>
      </>
    );
  });
  return (
    <ul className={css.list}>
      {elements.length === 0 ? (
        <p>Sorry, this movie has no reviews </p>
      ) : (
        elements
      )}
    </ul>
  );
};
