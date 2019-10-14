import axios from 'axios';

export const HISTORY_REQUEST = 'HISTORY_REQUEST';

export const HISTORY_SUCCESS = 'HISTORY_SUCCESS';

export const HISTORY_FAILURE = 'HISTORY_FAILURE';

export function historyRequest() {
  return {
    type: HISTORY_REQUEST
  };
}

export function historySuccess(response) {
  return {
    type: HISTORY_SUCCESS,
    data: response
  };
}

export function historyFailure(error) {
  return {
    type: HISTORY_FAILURE,
    data: error
  };
}

export function getHistory() {
  return async dispatch => {
    try {
      dispatch(historyRequest());
      const response = await axios.get('http://localhost:3000/history');
      dispatch(historySuccess(response.data));
    } catch (error) {
      dispatch(historyFailure(error));
    }
  };
}
