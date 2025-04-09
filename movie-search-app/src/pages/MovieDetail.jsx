import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieById } from '../services/omdbApi';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadMovie = async () => {
      const data = await fetchMovieById(id);
      if (data.Response === 'True') {
        setMovie(data);
        setError('');
      } else {
        setError(data.Error || 'Failed to load movie.');
      }
    };
    loadMovie();
  }, [id]);

  if (error) return <p className="error-message">{error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail-container">
      <h2 className="movie-title">{movie.Title}</h2>
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : '/no-poster.jpg'}
        alt={movie.Title}
        className="movie-poster"
      />

      <div className="movie-info">
        <p><strong>Released Date:</strong> {movie.Released}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Cast:</strong> {movie.Actors}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Runtime:</strong> {movie.Runtime}</p>
        <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        <p><strong>Awards:</strong> {movie.Awards}</p>
        <p><strong>Language:</strong> {movie.Language}</p>
        <p><strong>Country:</strong> {movie.Country}</p>
        {movie.BoxOffice && <p><strong>Box Office:</strong> {movie.BoxOffice}</p>}
      </div>
    </div>
  );
}

export default MovieDetail;
