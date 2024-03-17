import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/my-tickets">My Tickets</Link>
        <Link to="/liked-movies">Favorites</Link>
        <SearchBar/>
      </nav>
    </header>
  );
};

export default Header;
