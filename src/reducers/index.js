import { combineReducers } from 'redux'
import authedReducer from './authedUser'

export default combineReducers({
    authedUser: authedReducer
})