import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} placeholder="영화 검색" />
        <button type="submit">검색</button>
      </form>
    </div>
  );
};

export default Search;
