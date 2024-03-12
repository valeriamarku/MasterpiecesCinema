import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search movies..." />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
