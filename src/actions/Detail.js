import { push } from 'connected-react-router';

export default function sendDetail(id) {
  return dispatch => {
    dispatch(push(`/detail/${id}`));
  };
}
