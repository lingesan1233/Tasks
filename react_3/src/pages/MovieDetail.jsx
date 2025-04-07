import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/omdbApi';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetails(id);
      if (data.Response === 'True') {
        setMovie(data);
      } else {
        setError(data.Error);
      }
    };
    fetchMovie();
  }, [id]);

  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!movie) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'} alt={movie.Title} className="w-64" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;