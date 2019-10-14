/* eslint-env browser */
import React from 'react';
import PropTypes from 'prop-types';

import './Detail.scss';

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = null;

    this.setVideoRef = element => {
      if (this.videoRef == null) {
        this.videoRef = element;
      }
    };

    this.handleVideo = () => {
      if (!document.fullscreenElement) {
        this.videoRef.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    };
  }

  componentDidMount() {
    document.addEventListener('fullscreenchange', this.handleFullScreen);
    this.videoRef.addEventListener('ended', this.handleEndedVideo);
  }

  componentWillUnmount() {
    document.removeEventListener('fullscreenchange', this.handleFullScreen);
    this.videoRef.addEventListener('ended', this.handleEndedVideo);
  }

  handleEndedVideo = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    const { addToWatched, movie } = this.props;
    addToWatched(movie.id);
  };

  handleFullScreen = () => {
    if (document.fullscreenElement) {
      this.videoRef.removeAttribute('hidden');
      this.videoRef.play();
    } else {
      this.videoRef.pause();
      this.videoRef.setAttribute('hidden', 'hidden');
    }
  };

  render() {
    const { movie } = this.props;
    const {
      title,
      description,
      metadata,
      credits,
      parentalRatings,
      images,
      contents
    } = movie;

    const { url, width, height, type } = images[0];

    const video = contents[0];

    return (
      <div className="detail-container">
        <img
          src={url}
          alt={`img-${title}`}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            objectFit: `${type}`
          }}
        />
        <div className="detail-right">
          <h1>{title}</h1>
          <p className="detail-smaller">
            {`${parentalRatings
              .map(item => item.rating)
              .join(',')} | ${metadata.map(item => item.value).join(',')}`}
          </p>
          <p className="detail-larger">{`${description}`}</p>
          <p className="detail-smaller">{`Credits: ${credits
            .filter(item => item.role === 'Director')
            .map(item => item.name)
            .join(', ')}, ${credits
            .filter(item => item.role !== 'Director')
            .map(item => item.name)
            .join(', ')}`}</p>
          <button
            type="button"
            className="detail-button"
            onClick={this.handleVideo}
          >
            WATCH VIDEO
          </button>
          <video
            hidden
            ref={this.setVideoRef}
            width={video.width}
            height={video.height}
            controls
          >
            <source src={video.url} type={`video/${video.format}`} />
            <track kind="captions" srcLang={video.language} />
          </video>
        </div>
      </div>
    );
  }
}

Detail.defaultProps = {
  movie: {}
};

Detail.propTypes = {
  movie: PropTypes.shape(),
  addToWatched: PropTypes.func.isRequired
};

export default Detail;
