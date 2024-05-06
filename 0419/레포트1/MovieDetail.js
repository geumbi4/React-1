import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Genre: {movie.genre}</p>
      <p>Plot: {movie.plot}</p>
      <p>Cast: {movie.cast.join(', ')}</p>
    </div>
  );
};

export default MovieDetail;
