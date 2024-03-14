import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import { Movie } from '../types/Movie'; 

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>(); 

  const movieId = id || ''; 
  
  const movieDetails: Movie = {
      id: movieId,
      title: '',
      original_title: '',
      image: '',
      movie_banner: '',
      description: '',
      director: '',
      release_date: '',
      running_time: '',
      rt_score: ''
  };

  return (
    <div>
      <h1>Movie Details</h1>
      <MovieDetails movie={movieDetails} />
    </div>
  );
};

export default MovieDetailsPage;
