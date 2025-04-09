const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (searchTerm, type = '', page = 1) => {
  if (!API_KEY) {
    console.error('OMDB API Key is missing.');
    return { Response: 'False', Error: 'API key missing' };
  }

  try {
    const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}&type=${type}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return { Response: 'False', Error: 'Network error' };
  }
};

export const fetchMovieById = async (id) => {
  if (!API_KEY) {
    console.error('OMDB API Key is missing.');
    return { Response: 'False', Error: 'API key missing' };
  }

  try {
    const url = `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    return { Response: 'False', Error: 'Network error' };
  }
};
