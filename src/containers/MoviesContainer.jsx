import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../actions/Movies';
import sendDetail from '../actions/Detail';
import './MoviesContainer.scss';

class MoviesContainer extends React.Component {
  componentDidMount() {
    const { requestMovies } = this.props;
    requestMovies();
  }

  handleKeyDown = indx => e => {
    const { detailView } = this.props;
    switch (e.keyCode) {
      case 13:
        detailView(indx);
        break;
      default:
        break;
    }
  };

  render() {
    const { movies, detailView } = this.props;
    return (
      <div className="movie-list-row">
        {movies &&
          movies.map((movie, index) => (
            <MovieCard
              key={movie.id}
              index={index + 1}
              detailView={detailView}
              handleKeyDown={this.handleKeyDown}
              {...movie}
            />
          ))}
      </div>
    );
  }
}

MoviesContainer.defaultProps = {
  movies: []
};

MoviesContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()),
  requestMovies: PropTypes.func.isRequired,
  detailView: PropTypes.func.isRequired
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
    },
    detailView: id => {
      dispatch(sendDetail(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesContainer);
