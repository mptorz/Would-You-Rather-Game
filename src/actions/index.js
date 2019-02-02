import * as API from '../utils/_DATA';

export const SET_USER = 'SET_USER';
export const LOG_OUT = 'LOG_OUT';
export const VOTE = 'VOTE';
export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const CHANGE_TAB = 'CHANGE_TAB';

export function setSignedUser(id) {
  return {
    type: SET_USER,
    id,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}

export function vote(signedUser, questionId, answer) {
  return {
    type: VOTE,
    signedUser,
    questionId,
    answer,
  };
}

export function handleVote(questionId, answer) {
  return async (dispatch, getState) => {
    const { signedUser } = getState();
    await API._saveQuestionAnswer({ signedUser, questionId, answer });
    dispatch(vote(signedUser, questionId, answer));
  };
}

export function loadUsers(users) {
  return {
    type: LOAD_USERS,
    users,
  };
}

export function handleLoadUsers() {
  return async dispatch => {
    const users = await API._getUsers();
    dispatch(loadUsers(users));
  };
}

export function loadQuestions(questions) {
  return {
    type: LOAD_QUESTIONS,
    questions,
  };
}

export function handleLoadQuestions() {
  return async dispatch => {
    const questions = await API._getQuestions();
    dispatch(loadQuestions(questions));
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return async dispatch => {
    const toDispatch = await API._saveQuestion(question);
    dispatch(addQuestion(toDispatch));
  };
}

export function changeTab(tab = 'home') {
  return {
    type: CHANGE_TAB,
    tab,
  };
}
