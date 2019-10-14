import { SEND_WATCHED_SUCCESS, SEND_WATCHED_FAILURE } from '../actions/Detail';

const initialState = {
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_WATCHED_SUCCESS:
      return { ...state, data: action.data };
    case SEND_WATCHED_FAILURE:
      return { ...state, data: [] };
    default:
      return { ...state };
  }
}
