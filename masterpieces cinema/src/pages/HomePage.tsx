import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieListing from '../components/MovieListing/MovieListing';
import Api from '../fetch/Api';
import Header from '../components/Header/Header';
import { Movie } from '../types/Movie';
import style from './HomePage.module.css';

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const location = useLocation();
  const search = new URLSearchParams(location.search).get('search');

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

  useEffect(() => {
    if (search && search !== '') {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  }, [search, movies]);

  let renderContent: JSX.Element;
  if (loading) {
    renderContent = <p>Loading...</p>;
  } else if (error) {
    renderContent = <p className={style.error}>{error}</p>;
  } else {
    renderContent = <MovieListing movies={filteredMovies} />;
  }

  return (
    <div className={style.homepage}>
      <Header setFilteredMovies={setFilteredMovies} />
      <h1 className={style.title}>Welcome to Masterpieces Cinema!</h1>
      {renderContent}
    </div>
  );
};

export default HomePage;
