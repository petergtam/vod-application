import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

export default class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.divRef = null;
    this.setDivRef = ele => {
      if (this.divRef == null) this.divRef = ele;
    };
  }

  componentDidMount() {}

  render() {
    const { id, index, title, images, detailView, handleKeyDown } = this.props;
    const { url, width, height, type } = images[0];
    const { active } = this.props;
    if (this.divRef !== null) {
      if (active) {
        this.divRef.focus();
      } else {
        this.divRef.blur();
      }
    }
    return (
      <div
        className="movie-tile"
        onClick={() => detailView(id)}
        role="button"
        tabIndex={index}
        onKeyDown={handleKeyDown(id)}
        ref={this.setDivRef}
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
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  detailView: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};
