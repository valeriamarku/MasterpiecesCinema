import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import MovieListing from '../components/MovieListing/MovieListing';
import Api from '../fetch/Api';

interface Movie {
  id: string;
  title: string;
  original_title: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  release_date: string;
  running_time: string;
  rt_score: string;
}

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const fetchedMovies = await Api.fetchMovies();
      setMovies(fetchedMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };


  useEffect(() => {
    fetchMovies();
  }, []); 

  return (
    <div className="home-page">
      <SearchBar />
      <MovieListing movies={movies} />
    </div>
  );
};

export default HomePage;
