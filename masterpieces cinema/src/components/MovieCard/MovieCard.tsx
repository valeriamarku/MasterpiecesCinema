import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/Movie';
import styles from './MovieCard.module.css';
import LikeButton from '../LikeButton/LikeButton';

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div className={styles.movieCard}>
      <Link to={`/movie-details/${movie.id}`} className={styles.link}>
        <img src={movie.image} alt={movie.title} />
        <h2>{movie.title}</h2>
      </Link>
      <div className={styles.likeButton}>
        <LikeButton movie={movie} />
      </div>
    </div>
  );
};

export default MovieCard;
