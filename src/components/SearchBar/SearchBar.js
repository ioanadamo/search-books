import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={onSearch}
      />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
