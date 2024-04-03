import React from 'react';
import { useLikedMovies } from '../LikedMovies/LikedMoviesContext';
import Header from '../Header/Header';
import MovieListing from '../MovieListing/MovieListing';
import { Movie } from '../../types/Movie';

const LikedMovies: React.FC = () => {
  const { likedMovies } = useLikedMovies();
  const [filteredLikedMovies, setFilteredLikedMovies] = React.useState(likedMovies);
  
  const handleSearch = (filteredMovies: Movie[]) => {
    setFilteredLikedMovies(filteredMovies);
  };

  return (
    <div>
      <Header setFilteredMovies={handleSearch} />
      <h2>Liked Movies</h2>
      <MovieListing movies={filteredLikedMovies} />
    </div>
  );
};

export default LikedMovies;
