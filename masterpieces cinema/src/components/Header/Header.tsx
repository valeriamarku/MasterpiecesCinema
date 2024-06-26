import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Movie } from '../../types/Movie';
import Api from '../../fetch/Api';
import style from './Header.module.css';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface HeaderProps {
  setFilteredMovies: (filteredMovies: Movie[]) => void;
}

const Header: React.FC<HeaderProps> = ({ setFilteredMovies }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const [favoritePage, setFavoritePage] = useState<boolean>(false);
  const [home, setHomePage] = useState<boolean>(false);
  const [tickets, setTicketPage] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies: Movie[] = await Api.fetchMovies();
        setMovies(fetchedMovies);
      } catch (error) {
        console.error('Error fetching movies.');
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

  useEffect(() => {
    setHomePage(location.pathname === '/');
  }, [location]);

  useEffect(() => {
    setTicketPage(location.pathname === '/my-tickets');
  }, [location]);

  useEffect(() => {
    setFavoritePage(location.pathname === '/liked-movies');
  }, [location]);


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
    <div className={style.header}>
      <nav className={style.nav}>
        <div className={style.linkContainer}>
          <Link to="/" className={`${style.link} ${home ? style.active : ''}`}>Home</Link>
          <div className={style.separator}></div>
          <Link to="/my-tickets" className={`${style.link} ${tickets ? style.active : ''}`}>My Tickets</Link>
          <div className={style.separator}></div>
          <Link to="/liked-movies" className={`${style.link} ${favoritePage ? style.active : ''}`}>Favorites</Link>
        </div>
        <div className={style.searchContainer}>
          <Input
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleSearchChange}
            className={style.searchInput}
            suffix={
              <Button type="primary" icon={<SearchOutlined />} onClick={handleSearch} />
            }
          />
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
    </div>
  );
};

export default Header;
