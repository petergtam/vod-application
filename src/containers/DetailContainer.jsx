import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Detail from '../components/Detail';

function DetailContainer({ movie }) {
  return <Detail {...movie} />;
}

DetailContainer.propTypes = {
  movie: PropTypes.shape().isRequired
};

const mapStateToProps = state => {
  const path = state.router.location.pathname.split('/');
  const param = parseInt(path[path.length - 1], 10);
  return {
    movie: state.movies.data[param]
  };
};

export default connect(mapStateToProps)(DetailContainer);
