import { GET_USERS } from "../actions/usersActions";

export default (state={}, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}