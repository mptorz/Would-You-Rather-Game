import { combineReducers } from 'redux';
import questions from './questions';
import users from './users';
import signedUser from './signedUser';
import navigation from './navigation';

export default combineReducers({
  signedUser,
  questions,
  users,
  navigation,
});
