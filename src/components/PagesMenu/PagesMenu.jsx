import { NavLink } from 'react-router-dom';
import css from './PagesMenu.module.css';
const getClassName = ({ isActive }) => {
  return isActive ? `${css.nav} ${css.active}` : css.nav;
};
export const PagesMenu = () => {
  return (
    <>
      <NavLink to="/" className={getClassName}>
        Home
      </NavLink>
      <NavLink to="/movies" className={getClassName}>
        Movies
      </NavLink>
    </>
  );
};

