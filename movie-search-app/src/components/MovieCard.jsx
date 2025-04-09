import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div style={styles.card}>
      <Link to={`/movie/${movie.imdbID}`} style={styles.link}>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : '/no-poster.jpg'}
          alt={movie.Title}
          style={styles.image}
        />
        <h3 style={styles.title}>{movie.Title}</h3>
        <p style={styles.year}>{movie.Year}</p>
      </Link>
    </div>
  );
}

const styles = {
  card: {
    width: '200px',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#fdfdfd',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  image: {
    width: '180px',
    height: '270px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
  },
  year: {
    fontSize: '0.9rem',
    color: '#555',
  },
};

export default MovieCard;
