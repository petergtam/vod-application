/* eslint-env browser */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovies } from '../actions/Movies';
import MovieCardContainer from './MovieCardContainer';
import './MoviesContainer.scss';

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 2
    };
  }

  componentDidMount() {
    const { requestMovies } = this.props;
    requestMovies();
    document.addEventListener('keydown', this.handleKeyboard);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyboard);
  }

  handleKeyboard = e => {
    let { active } = this.state;
    const { movies } = this.props;
    const size = movies.length;
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
    const { movies } = this.props;
    const { active } = this.state;
    return (
      <>
        {movies && (
          <div className="movie-wrapper">
            <div className="movie">
              <div className="movie-list-row">
                {movies.map((movie, index) => (
                  <MovieCardContainer
                    key={movie.id}
                    id={movie.id}
                    active={index + 3 === active}
                    index={index}
                    setCurrentTile={this.setCurrentTile}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

MoviesContainer.defaultProps = {
  movies: []
};

MoviesContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()),
  requestMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    movies: state.movies.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestMovies: () => {
      dispatch(getMovies());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesContainer);
