import { GET_USERS, SAVE_USER_ANSWER, SAVE_USER_QUESTION, ADD_USER } from "../actions/usersActions";

export default (state={}, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_USER:
            return {
                ...state,
                [action.user.id]: action.user
            }
        case SAVE_USER_ANSWER:
            const { authedUser, qid, answer } = action
            return {
                ...state,
                [authedUser]: {
                  ...state[authedUser],
                  answers: {
                    ...state[authedUser].answers,
                    [qid]: answer
                  }
                }
              }
        case SAVE_USER_QUESTION: {
            const { author: authedUser, id } = action
            console.log('ppp',action)
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    questions: state[authedUser].questions.concat([id])
                }
            }
        }
        default:
            return state
    }
}