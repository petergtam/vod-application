import axios from 'axios';

export const MOVIES_REQUEST = 'MOVIES_REQUEST';

export const MOVIES_SUCCESS = 'MOVIES_SUCCESS';

export const MOVIES_FAILURE = 'MOVIES_FAILURE';

export function moviesRequest() {
  return {
    type: MOVIES_REQUEST
  };
}

export function moviesSuccess(response) {
  return {
    type: MOVIES_SUCCESS,
    data: response
  };
}

export function moviesFailure(error) {
  return {
    type: MOVIES_FAILURE,
    data: error
  };
}

export function getMovies() {
  return async dispatch => {
    try {
      dispatch(moviesRequest());
      const response = await axios.get(
        'https://demo2697834.mockable.io/movies'
      );
      dispatch(moviesSuccess(response.data.entries));
    } catch (error) {
      dispatch(moviesFailure(error));
    }
  };
}
