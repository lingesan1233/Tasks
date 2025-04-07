import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded p-2 shadow">
      <Link to={`/movie/${movie.imdbID}`}>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'} alt={movie.Title} className="w-full h-60 object-cover" />
        <h3 className="text-lg font-semibold mt-2">{movie.Title}</h3>
        <p>{movie.Year}</p>
      </Link>
    </div>
  );
};
