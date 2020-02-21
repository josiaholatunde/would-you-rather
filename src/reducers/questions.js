import { GET_QUESTIONS, SAVE_QUESTION_ANSWER, SAVE_QUESTION } from "../actions/questionActions";

export default (state={}, action) => {
    switch(action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION_ANSWER:
            const { authedUser, qid, answer } = action
            return {
                ...state,
                [qid]: {
                  ...state[qid],
                  [answer]: {
                    ...state[qid][answer],
                    votes: state[qid][answer].votes.concat([authedUser])
                  }
                }
              }
        case SAVE_QUESTION:
            const { formattedQuestion } = action
            return {
                ...state,
                [formattedQuestion.id]: formattedQuestion
            }
        default:
            return state
    }
}