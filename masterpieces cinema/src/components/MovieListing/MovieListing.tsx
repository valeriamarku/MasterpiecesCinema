import React from 'react';
import { Movie } from '../../types/Movie';
import MovieCard from '../MovieCard/MovieCard';

interface Props {
  movies: Movie[];
}

const MovieListing: React.FC<Props> = ({ movies }) => {
  return (
    <div className="movie-listing">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieListing;
