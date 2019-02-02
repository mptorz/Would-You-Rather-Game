import { LOAD_USERS, VOTE, ADD_QUESTION } from '../actions';

export default function users(state = {}, action) {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        ...action.users,
      };
    case VOTE:
      return {
        ...state,
        [action.signedUser]: {
          ...state[action.signedUser],
          answers: {
            ...state[action.signedUser].answers,
            [action.questionId]: action.answer,
          },
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([
            action.question.id,
          ]),
        },
      };
    default:
      return state;
  }
}
