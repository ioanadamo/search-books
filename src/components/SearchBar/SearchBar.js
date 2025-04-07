import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={onSearch}
      />
    </div>
  );
}

export default SearchBar;
