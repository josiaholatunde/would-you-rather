import { _getUsers } from "../utils/_DATA"
import { SET_AUTHED_USER } from "./authedActions"

export const GET_USERS = 'GET_USERS'

export const handleGetUsers = () => {
    return (dispatch) => {
        return _getUsers()
            .then(users => dispatch(getUsers(users)))
            .catch()
    }
}

export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}

export const handleLoginUser = (id, history) => dispatch => {
    dispatch(loginUser(id))
    history.push('/questions')
}

export function loginUser(id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}