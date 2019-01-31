import { SET_USER, LOG_OUT } from '../actions';

export default function signedUser(state = null, action) {
  switch (action.type) {
    case SET_USER:
      return action.id;
    case LOG_OUT:
      return null;
    default:
      return state;
  }
}
