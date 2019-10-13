import React from 'react';

import './Detail.scss';

function Detail(movie) {
  const {
    title,
    description,
    metadata,
    credits,
    parentalRatings,
    images
  } = movie;

  const { url, width, height, type } = images[0];

  return (
    <div className="detail-layout">
      <img
        src={url}
        alt={`img-${title}`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          objectFit: `${type}`
        }}
        className="detail-left"
      />
      <div className="detail-right">
        <h1>{title}</h1>
        <p>
          {`${parentalRatings
            .map(item => item.rating)
            .join(',')} | ${metadata.map(item => item.value).join(',')}`}
        </p>
        <p>{`${description}`}</p>
        <p>{`Credits: ${credits
          .filter(item => item.role === 'Director')
          .map(item => item.name)
          .join(', ')}, ${credits
          .filter(item => item.role !== 'Director')
          .map(item => item.name)
          .join(', ')}`}</p>
      </div>
    </div>
  );
}

export default Detail;
