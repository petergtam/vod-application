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
    addToWatched: index => {
      dispatch(sendWatched(index));
    }
  };
};

const mapStateToProps = state => {
  const match = matchDetailSelector(state);
  let index = 0;
  if (match.params) {
    index = match.params.index;
  }
  return {
    movie: state.movies.data[index],
    index
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailContainer);
