import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import { fetchMovies } from '../services/omdbApi';

function Home() {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState('');
  const [isDefault, setIsDefault] = useState(true);

  const handleSearch = (term, selectedType) => {
    setSearchTerm(term);
    setType(selectedType);
    setCurrentPage(1);
    setIsDefault(false);
  };

  const loadMovies = async () => {
    const query = isDefault ? 'Avengers' : searchTerm;
    const data = await fetchMovies(query, type, currentPage);
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
    loadMovies();
  }, [searchTerm, type, currentPage, isDefault]);

  return (
    <div style={styles.container}>
      <div style={styles.searchBar}>
        <SearchBar onSearch={handleSearch} />
      </div>

      <h2 style={styles.title}>
        {isDefault ? '🔥 Popular Picks' : `🎬 Results for "${searchTerm}"`}
      </h2>

      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.grid}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {movies.length > 0 && (
        <div style={styles.pagination}>
          <Pagination
            currentPage={currentPage}
            totalResults={totalResults}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
  },
  searchBar: {
    marginBottom: '2rem',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    fontWeight: '600',
  },
  error: {
    color: 'red',
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    justifyItems: 'center',
    marginBottom: '2rem',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },
};

export default Home;
