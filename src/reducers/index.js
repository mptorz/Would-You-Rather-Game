import { combineReducers } from 'redux';
import questions from './questions';
import users from './users';
import signedUser from './signedUser';

export default combineReducers({
  signedUser,
  questions,
  users,
});
