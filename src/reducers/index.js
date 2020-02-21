import { combineReducers } from 'redux'
import authedReducer from './authedUser'
import usersReducer from '../reducers/users'
import questionReducer from '../reducers/questions'
import loadingReducer from '../reducers/loading'


export default combineReducers({
    authedUser: authedReducer,
    users: usersReducer,
    questions: questionReducer,
    loading: loadingReducer
})