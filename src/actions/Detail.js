import { push } from 'connected-react-router';

export const SEND_WATCHED = 'SEND_WATCHED';

export function sendDetail(id) {
  return dispatch => {
    dispatch(push(`/detail/${id}`));
  };
}

export function sendWatched(id) {
  return {
    type: SEND_WATCHED,
    data: id
  };
}
