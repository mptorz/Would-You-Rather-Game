import { VOTE, ADD_QUESTION, LOAD_QUESTIONS } from '../actions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case VOTE:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.answer]: {
            ...state[action.questionId][action.answer],
            votes: state[action.questionId][action.answer].votes.concat([
              action.signedUser,
            ]),
          },
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
