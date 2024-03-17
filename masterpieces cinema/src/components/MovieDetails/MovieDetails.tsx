import React from 'react';
import { Movie } from '../../types/Movie';
import {StarFilled, ClockCircleFilled } from '@ant-design/icons';


interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div className="movie-details">
      <img src={movie.movie_banner} alt={movie.title} />
      <h2>{movie.title} ({movie.original_title})</h2>
      <h3>Price: 700 Leke</h3>
      <p>Directed by {movie.director}</p>
      <p>{movie.release_date}</p>
      <p>{movie.running_time} <ClockCircleFilled /></p>
      <p>{movie.rt_score} <StarFilled /></p>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetails;
