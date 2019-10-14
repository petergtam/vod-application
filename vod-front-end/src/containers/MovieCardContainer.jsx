import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { sendDetail } from '../actions/Detail';
import './MovieCardContainer.scss';

class MovieCardContainer extends React.Component {
  handleKeyDown = id => e => {
    const { detailView } = this.props;
    switch (e.keyCode) {
      case 13:
        detailView(id);
        break;
      default:
        break;
    }
  };

  render() {
    const { movie, index, detailView, active, setCurrentTile } = this.props;
    return (
      <MovieCard
        key={movie.id}
        index={index + 3}
        detailView={detailView}
        active={active}
        handleKeyDown={this.handleKeyDown}
        setCurrentTile={setCurrentTile}
        {...movie}
      />
    );
  }
}

MovieCardContainer.defaultProps = {
  movie: {}
};

MovieCardContainer.propTypes = {
  movie: PropTypes.shape(),
  detailView: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  setCurrentTile: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    detailView: id => {
      dispatch(sendDetail(id));
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  const movie = state.movies.data.find(item => item.id === ownProps.id);
  return {
    movie
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCardContainer);
