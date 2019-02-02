import { CHANGE_TAB } from '../actions';

export default function(state = 'home', action) {
  if (action.type === CHANGE_TAB) {
    return action.tab;
  }
  return state;
}
