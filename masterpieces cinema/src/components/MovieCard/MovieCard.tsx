import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/Movie';
import styles from './MovieCard.module.css';

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <Link to={`/movie-details/${movie.id}`} className={styles.movieCard}>
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
    </Link>
  );
};

export default MovieCard;
