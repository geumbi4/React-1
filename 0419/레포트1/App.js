import React, { useState } from 'react';
import Header from './Header';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import Search from './Search';
import Footer from './Footer';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: '인셉션',
      genre: '액션',
      plot: '자신의 비밀을 훔치기 위해 다른 사람의 꿈에 들어가는 도둑 이야기',
      cast: ['레오나르도 디카프리오'],
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    },
  ]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = query => {
  };

  const handleMovieSelect = movie => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <Header />
      <Search handleSearch={handleSearch} />
      {selectedMovie ? <MovieDetail movie={selectedMovie} /> : <MovieList movies={movies} />}
      <Footer />
    </div>
  );
}

export default App;
