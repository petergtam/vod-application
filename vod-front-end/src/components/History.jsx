import React from 'react';
import HistoryContainer from '../containers/HistoryContainer';
import './Movies.scss';

export default function History() {
  return (
    <div className="movies-container">
      <h2>Watched Videos</h2>
      <HistoryContainer />
    </div>
  );
}
