import React from 'react';

const LikedMovies: React.FC<{ likedMovies: string[]; removeFromLikedMovies: (movie: string) => void }> = ({ likedMovies, removeFromLikedMovies }) => {
  return (
    <div className="liked-movies">
      <h2>Liked Movies</h2>
      <ul>
        {likedMovies.map((movie, index) => (
          <li key={index}>
            {movie} <button onClick={() => removeFromLikedMovies(movie)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedMovies;
