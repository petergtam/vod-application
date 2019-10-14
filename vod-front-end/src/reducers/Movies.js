import { MOVIES_SUCCESS, MOVIES_FAILURE } from '../actions/Movies';

export default function(state = {}, action) {
  switch (action.type) {
    case MOVIES_SUCCESS:
      return { ...state, data: action.data };
    case MOVIES_FAILURE:
      return { ...state, data: [] };
    default:
      return { ...state };
  }
}
