import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import MovieCard from '../components/MovieCard';
// import { sendDetail } from '../actions/Detail';
import './MoviesContainer.scss';

class HistoryContainer extends React.Component {
  handleKeyDown = indx => e => {
    switch (e.keyCode) {
      case 13:
        console.log(indx);
        break;
      default:
        break;
    }
  };

  render() {
    const { watched } = this.props;
    console.log(watched);
    return (
      <div className="movie-list-row">
        {/* watched &&
          watched.map((movie, index) => (
            <MovieCard
              key={movie.id}
              index={index + 1}
              detailView={detailView}
              handleKeyDown={this.handleKeyDown}
              {...movie}
            />
          )) */}
      </div>
    );
  }
}

HistoryContainer.defaultProps = {
  watched: []
};

HistoryContainer.propTypes = {
  watched: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => {
  return {
    watched: state.watched.data
  };
};

export default connect(mapStateToProps)(HistoryContainer);
