import React from 'react';
import { Movie } from '../../types/Movie';

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <button>Like</button>
    </div>
  );
};

export default MovieCard;
