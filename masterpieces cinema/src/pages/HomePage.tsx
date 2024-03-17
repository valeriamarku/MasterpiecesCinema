import React, { useEffect, useState } from 'react';
import MovieListing from '../components/MovieListing/MovieListing';
import Api from '../fetch/Api';
import Header from '../components/Header/Header';

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
      <Header/>
      <h1>Welcome to Masterpieces Cinema!</h1>
      <MovieListing movies={movies} />
    </div>
  );
};

export default HomePage;
