import React, { useState, useEffect } from 'react';
import { searchMovies } from '../api/omdbApi';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('batman');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [selectedType, setSelectedType] = useState('');

  const handleSearch = async () => {
    const data = await searchMovies(searchTerm, page, selectedType);
    if (data.Response === 'True') {
      setMovies(data.Search);
      setTotalResults(parseInt(data.totalResults));
      setError('');
    } else {
      setMovies([]);
      setTotalResults(0);
      setError(data.Error);
    }
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [page, selectedType]);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Movie Search App</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <FilterDropdown selectedType={selectedType} setSelectedType={setSelectedType} />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center mt-4 gap-4">
        {page > 1 && <button onClick={() => setPage(page - 1)} className="px-4 py-2 border rounded">Prev</button>}
        {movies.length > 0 && page * 10 < totalResults && <button onClick={() => setPage(page + 1)} className="px-4 py-2 border rounded">Next</button>}
      </div>
    </div>
  );
};