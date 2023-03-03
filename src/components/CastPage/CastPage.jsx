import { getActor } from 'services/getFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imgs from '../../Images/theRock.jpg';
import css from './CastPage.module.css';
const CastPage = () => {
  const { id } = useParams();
  const [actor, setActor] = useState([]);
  useEffect(() => {
    const fetchActor = async () => {
      try {
        const { data } = await getActor(id);

        const arrayWithCasts = data.cast.map(item => {
          return {
            name: item.name,
            photo: `https://image.tmdb.org/t/p/w500/${item.profile_path}`,
          };
        });
        setActor(arrayWithCasts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchActor();
  }, [id]);

  const elements = actor.map(item => {
    return (
      <li className={css.item} key={item.name}>
        <img
          src={item.photo.includes('null') ? `${imgs}` : item.photo}
          alt="actor"
          className={css.actorImg}
        />
        <p className={css.name}>{item.name}</p>
      </li>
    );
  });

  return <ul className={css.items}>{elements}</ul>;
};
export default CastPage;
