import React from 'react';
import { connect } from 'react-redux';
import Detail from '../components/Detail';
import { matchDetailSelector } from '../selectors/routerSelectors';
import { sendWatched } from '../actions/Detail';

function DetailContainer(props) {
  return <Detail {...props} />;
}

const mapDispatchToProps = dispatch => {
  return {
    addToWatched: id => {
      dispatch(sendWatched(id));
    }
  };
};

const mapStateToProps = state => {
  const match = matchDetailSelector(state);
  let movie;
  if (match) {
    movie = state.movies.data.find(item => item.id === match.params.id);
  } else {
    movie = {};
  }
  return {
    movie
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailContainer);
