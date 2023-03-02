import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '9b020c0fe253e2a5d274f7265e2b0541';
const getMovie = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
});
export const searchMovie = () => {
  const data = getMovie.get('trending/all/day');

  return data;
};
export const detailsMovie = id => {
  const data = getMovie.get(`movie/${id}`);
  return data;
};
export const getActor = id => {
  const data = getMovie.get(`movie/${id}/credits`);
  return data;
};
export const getReviews = id => {
  const data = getMovie.get(`movie/${id}/reviews`);
  return data;
};
export const searchField = search => {
  const data = getMovie.get(`/search/movie`, {
    params: {
      query: search,
    },
  });

  return data;
};
