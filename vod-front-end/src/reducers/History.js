import { HISTORY_SUCCESS, HISTORY_FAILURE } from '../actions/History';

export default function(state = {}, action) {
  switch (action.type) {
    case HISTORY_SUCCESS:
      return { ...state, data: action.data };
    case HISTORY_FAILURE:
      return { ...state, data: [] };
    default:
      return { ...state };
  }
}
