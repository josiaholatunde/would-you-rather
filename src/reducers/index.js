import { combineReducers } from 'redux'
import authedReducer from './authedUser'
import usersReducer from '../reducers/users'


export default combineReducers({
    authedUser: authedReducer,
    users: usersReducer
})