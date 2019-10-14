/* eslint-env browser */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieCardContainer from './MovieCardContainer';
import { getHistory } from '../actions/History';
import './MoviesContainer.scss';

class HistoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 2
    };
  }

  componentDidMount() {
    const { requestHistory } = this.props;
    requestHistory();

    document.addEventListener('keydown', this.handleKeyboard);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyboard);
  }

  handleKeyboard = e => {
    let { active } = this.state;
    const { watched } = this.props;
    const size = watched.length;
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        if (active - 1 < 3) active = 3;
        else active -= 1;
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (active + 1 >= size + 3) active = size + 2;
        else active += 1;
        break;
      case 'Escape':
        e.preventDefault();
        active = 2;
        break;
      default:
        break;
    }
    this.setState({ active });
  };

  setCurrentTile = index => {
    this.setState({ active: index });
  };

  render() {
    const { watched } = this.props;
    const { active } = this.state;
    return (
      <>
        {watched.length > 0 && (
          <div className="movie-wrapper">
            <div className="movie">
              <div className="movie-list-row">
                {watched.map((movieId, index) => (
                  <MovieCardContainer
                    key={movieId}
                    id={movieId}
                    active={index + 3 === active}
                    index={index}
                    setCurrentTile={this.setCurrentTile}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {watched.length === 0 && <h3>You have no watched any video yet</h3>}
      </>
    );
  }
}

HistoryContainer.defaultProps = {
  watched: []
};

HistoryContainer.propTypes = {
  watched: PropTypes.arrayOf(PropTypes.string),
  requestHistory: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    requestHistory: () => {
      dispatch(getHistory());
    }
  };
};

const mapStateToProps = state => {
  return {
    watched: state.watched.data
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryContainer);
