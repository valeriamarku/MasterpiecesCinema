import React, { createContext, useContext, useState, useEffect } from 'react';

interface Movie {
  image: string;
  id: string;
  title: string;
  original_title: string;
  movie_banner: string;
  description: string;
  director: string;
  release_date: string;
  running_time: string;
  rt_score: string;
}

interface LikedMoviesContextType {
  likedMovies: Movie[];
  addToLikedMovies: (movie: Movie) => void;
  removeFromLikedMovies: (movieId: string) => void;
}

interface LikedMoviesProviderProps {
  children: React.ReactNode;
}

const LikedMoviesContext = createContext<LikedMoviesContextType | undefined>(undefined);

export const LikedMoviesProvider: React.FC<LikedMoviesProviderProps> = ({ children }) => {
  const [likedMovies, setLikedMovies] = useState<Movie[]>(() => {
    const storedLikedMovies = localStorage.getItem('likedMovies');
    return storedLikedMovies ? JSON.parse(storedLikedMovies) : [];
  });

  useEffect(() => {
    localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
  }, [likedMovies]);

  const addToLikedMovies = (movie: Movie) => {
    setLikedMovies(prevLikedMovies => [...prevLikedMovies, movie]);
  };

  const removeFromLikedMovies = (movieId: string) => {
    setLikedMovies(prevLikedMovies => prevLikedMovies.filter(movie => movie.id !== movieId));
  };

  return (
    <LikedMoviesContext.Provider value={{ likedMovies, addToLikedMovies, removeFromLikedMovies }}>
      {children}
    </LikedMoviesContext.Provider>
  );
};

export const useLikedMovies = () => {
  const context = useContext(LikedMoviesContext);
  if (!context) {
    throw new Error('useLikedMovies must be used within a LikedMoviesProvider');
  }
  return context;
};
