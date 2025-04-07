const API_KEY = "your_omdb_api_key"; // Replace with your actual key
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query, page = 1, type = '') => {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}${type ? `&type=${type}` : ''}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getMovieDetails = async (imdbID) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};