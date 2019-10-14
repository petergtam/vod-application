import { push } from 'connected-react-router';
import axios from 'axios';

export const SEND_WATCHED_REQUEST = 'SEND_WATCHED_REQUEST';
export const SEND_WATCHED_SUCCESS = 'SEND_WATCHED_REQUEST';
export const SEND_WATCHED_FAILURE = 'SEND_WATCHED_REQUEST';

export function sendDetail(id) {
  return dispatch => {
    dispatch(push(`/detail/${id}`));
  };
}

export function sendWatchedRequest() {
  return {
    type: SEND_WATCHED_REQUEST
  };
}

export function sendWatchedSuccess(response) {
  return {
    type: SEND_WATCHED_SUCCESS,
    data: response
  };
}

export function sendWatchedFailure(error) {
  return {
    type: SEND_WATCHED_FAILURE,
    data: error
  };
}

export function sendWatched(id) {
  return async dispatch => {
    try {
      dispatch(sendWatchedRequest());
      const response = await axios.put(`http://localhost:3000/history/${id}`);
      dispatch(sendWatchedSuccess(response.data));
    } catch (error) {
      dispatch(sendWatchedFailure(error));
    }
  };
}
