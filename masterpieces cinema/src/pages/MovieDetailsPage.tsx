import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import { Movie } from '../types/Movie';
import Api from '../fetch/Api';
import Header from '../components/Header/Header';


const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const [, setFilteredMovies] = useState<Movie[]>([]);
  const movieTitle = movieDetails?.title || '';

  console.log('Passing movie title:', movieDetails?.title);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        if (id) {
          const movie = await Api.fetchMovieDetails(id);
          setMovieDetails(movie);

          
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div>
      <Header setFilteredMovies={setFilteredMovies} />
      <h1>Movie Details</h1>
      {movieDetails && <MovieDetails movie={movieDetails} />}
      <Link
          to={`/reserve/${encodeURIComponent(movieTitle)}`}
      >
        <button>Reserve</button>
      </Link>
    </div>
  );
};

export default MovieDetailsPage;
