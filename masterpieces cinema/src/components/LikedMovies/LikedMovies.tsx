import React from 'react';
import { useLikedMovies } from '../LikedMovies/LikedMoviesContext';

const LikedMovies: React.FC = () => {
  const { likedMovies } = useLikedMovies();

  return (
    <div>
      <h2>Liked Movies</h2>
      <ul>
        {likedMovies.map((movie, index) => (
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
