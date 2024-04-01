import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import { Movie } from '../types/Movie';
import Api from '../fetch/Api';


const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);

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
      <h1>Movie Details</h1>
      {movieDetails && <MovieDetails movie={movieDetails} />}
      <Link
        to={{ pathname: "/reserve", state: { movie: movieDetails?.title } }}
      >
        <button>Reserve</button>
      </Link>
    </div>
  );
};

export default MovieDetailsPage;
