import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

export default function MovieCard({
  title,
  images,
  detailView,
  index,
  handleKeyDown
}) {
  const { url, width, height, type } = images[0];

  return (
    <div
      className="movie-tile"
      onClick={() => detailView(index - 1)}
      role="button"
      tabIndex={index}
      onKeyDown={handleKeyDown(index - 1)}
    >
      <img
        src={url}
        alt={`img-${title}`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          objectFit: `${type}`
        }}
      />
      <p className="movie-tile-title" style={{ width: `${width}px` }}>
        {title}
      </p>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  detailView: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  handleKeyDown: PropTypes.func.isRequired
};
