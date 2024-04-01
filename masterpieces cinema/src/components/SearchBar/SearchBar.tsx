import React, { useState } from 'react';
import { Movie } from '../../types/Movie';

const SearchBar: React.FC<{ movies: Movie[]; setFilteredMovies: React.Dispatch<React.SetStateAction<Movie[]>> }> = ({ movies, setFilteredMovies }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filteredMovies);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    if (!event.target.value) {
      setFilteredMovies(movies);
    }
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search movies..." value={searchQuery} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
