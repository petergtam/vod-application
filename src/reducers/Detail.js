import { SEND_WATCHED } from '../actions/Detail';

const initialState = {
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_WATCHED:
      return { ...state, data: [...state.data, action.data] };
    default:
      return { ...state };
  }
}
