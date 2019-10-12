import React from 'react';
import './Home.scss';
import MoviesList from './MoviesList.jsx';

export default function Home() {
  return (
    <div className="movies-container">
      <h2>Movies</h2>
      <MoviesList />
    </div>
  );
}
