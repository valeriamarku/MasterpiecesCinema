import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/Movie';

interface HeaderProps {
  movies: Movie[];
  setFilteredMovies: (filteredMovies: Movie[]) => void;
}

const Header: React.FC<HeaderProps> = ({ movies, setFilteredMovies }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredMovies(filteredMovies);
  };

  const handleSearch = () => {
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery)
    );
    setFilteredMovies(filteredMovies);
  };

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/my-tickets">My Tickets</Link>
        <Link to="/liked-movies">Favorites</Link>
        <div className="search-bar">
          <input type="text" placeholder="Search movies..." value={searchQuery} onChange={handleSearchChange} />
          <button onClick={handleSearch}>Search</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
