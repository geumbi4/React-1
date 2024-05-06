import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>영화 목록</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
