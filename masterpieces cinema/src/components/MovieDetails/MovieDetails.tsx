import React from 'react';
import { Movie } from '../../types/Movie';
import { StarFilled, ClockCircleFilled } from '@ant-design/icons';
import style from './MovieDetails.module.css';

interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div className={style.movieDetails}>
      <img src={movie.movie_banner} alt={movie.title} className={style.bannerImage} />
      <div className={style.detailsContainer}>
        <div className={style.titleContainer}>
          <h2 className={style.title}>{movie.title} ({movie.original_title})</h2>
        </div>
        <div className={style.info}>
          <div className={style.sideInfo}>
            <p className={style.releaseDate}>Release Date: {movie.release_date}</p>
            <p className={style.runningTime}>Duration: {movie.running_time} <ClockCircleFilled /></p>
            <p className={style.rating}>Rating: {movie.rt_score} <StarFilled /></p>
          </div>
          <div className={style.descriptionContainer}>
            <p className={style.description}>{movie.description}</p>
            <p className={style.director}>Directed by {movie.director}</p>
            <h3 className={style.price}>Price: 700 ALL</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
