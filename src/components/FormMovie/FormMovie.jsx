import { useState } from 'react';
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
