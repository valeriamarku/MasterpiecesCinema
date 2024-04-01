import React from 'react';
import { useLikedMovies } from '../LikedMovies/LikedMoviesContext';
import Header from '../Header/Header';
import { Movie } from '../../types/Movie';

const LikedMovies: React.FC = () => {
  const { likedMovies } = useLikedMovies();
  const [filteredLikedMovies, setFilteredLikedMovies] = React.useState(likedMovies);
  
  const handleSearch = (filteredMovies: Movie[]) => {
    setFilteredLikedMovies(filteredMovies);
  };

  return (
    <div>
      <Header movies={likedMovies} setFilteredMovies={handleSearch} />
      <h2>Liked Movies</h2>
      <ul>
        {filteredLikedMovies.map((movie, index) => (
          <li key={index}>
            <img src={movie.image} alt={movie.title} />
            <div>
              <h3>{movie.title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedMovies;
