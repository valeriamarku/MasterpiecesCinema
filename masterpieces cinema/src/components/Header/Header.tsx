import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Movie } from '../../types/Movie';
import Api from '../../fetch/Api';
import style from './Header.module.css';

interface HeaderProps {
  setFilteredMovies: (filteredMovies: Movie[]) => void;
}

const Header: React.FC<HeaderProps> = ({ setFilteredMovies }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Movie[]>([]);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies: Movie[] = await Api.fetchMovies();
        setMovies(fetchedMovies); 
      } catch (error) {
        console.error('Error fetching movies. Please try again later.');
      }
    };

    fetchMovies();
  }, []); 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(query)
    );
    setFilteredMovies(filteredMovies);
    setSuggestions(filteredMovies);
  };

  const handleSuggestionClick = (movieId: string) => {
    navigate(`/movie-details/${movieId}`);
    setSearchQuery('');
    setSuggestions([]); 
  };

  const handleSearch = () => {
    navigate(`/?search=${searchQuery}`);
  };

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.linkContainer}>
          <Link to="/" className={style.link}>Home</Link>
          <Link to="/my-tickets" className={style.link}>My Tickets</Link>
          <Link to="/liked-movies" className={style.link}>Favorites</Link>
        </div>
        <div className={style.searchContainer}>
          <input type="text" placeholder="Search movies..." value={searchQuery} onChange={handleSearchChange} className={style.searchInput} />
          <button onClick={handleSearch} className={style.searchButton}>Search</button>
          {suggestions.length > 0 && (
            <ul className={style.suggestions} ref={suggestionsRef}>
              {suggestions.map(movie => (
                <li key={movie.id} onClick={() => handleSuggestionClick(movie.id)} className={style.suggestionItem}>
                  {movie.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
