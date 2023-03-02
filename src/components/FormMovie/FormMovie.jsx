import { useState } from 'react';
import PropTypes from 'prop-types';
export const FormSearchMovie = ({ submit }) => {
  const [search, setSearch] = useState('');
  const onHandleChange = e => {
    setSearch(e.target.value);
  };
  const onHandleSubmit = e => {
    e.preventDefault();
    submit({ ...search });
  };
  return (
    <form>
      <label onSubmit={onHandleSubmit}>
        <input
          name="search"
          value={search}
          type="text"
          onChange={onHandleChange}
        />
      </label>
      <button disabled={!search.trim()}>Submit</button>
    </form>
  );
};

FormSearchMovie.propTypes = {
  submit: PropTypes.func.isRequired,
};
