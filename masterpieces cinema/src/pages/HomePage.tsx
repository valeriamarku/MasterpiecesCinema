import React, { useEffect, useState } from 'react';
import MovieListing from '../components/MovieListing/MovieListing';
import Api from '../fetch/Api';
import Header from '../components/Header/Header';
import { Movie } from '../types/Movie';

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const fetchedMovies: Movie[] = await Api.fetchMovies();
      setMovies(fetchedMovies);
    } catch (error) {
      setError('Error fetching movies. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []); 

  return (
    <div className="home-page">
      <Header movies={movies} setFilteredMovies={setFilteredMovies} />
      <h1>Welcome to Masterpieces Cinema!</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <MovieListing movies={filteredMovies.length ? filteredMovies : movies} />
      )}
    </div>
  );
};

export default HomePage;
