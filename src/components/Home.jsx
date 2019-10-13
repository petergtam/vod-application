import React from 'react';
import './Movies.scss';
import MoviesContainer from '../containers/MoviesContainer';

export default function Home() {
  return (
    <div className="movies-container">
      <h2>Movies</h2>
      <MoviesContainer />
    </div>
  );
}
