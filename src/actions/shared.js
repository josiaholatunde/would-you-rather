import {
    getInitialData
} from '../utils/api'
import { getUsers, saveUserAnswer, saveUserQuestion } from './usersActions'
import { getQuestions, saveQuestionAnswer, saveQuestion } from './questionActions'
import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { showNotification } from '../utils/showNotification'

export const SET_LOADING = 'SET_LOADING'

export default function handleInitialData() {

    return (dispatch) => {
        dispatch(showLoading())
        setTimeout(() => {
            return getInitialData().then(({
                users, questions }) => {
                dispatch(getUsers(users))
                dispatch(getQuestions(questions))
                dispatch(hideLoading())
            }).catch(() => {
                dispatch(hideLoading())
            })
        }, 1000)
    }
}


export const handleSavePollAnswer = ({ qid, answer }) => {

    return (dispatch, getState) => {
        dispatch(showLoading())
        setTimeout(() => {
            const { authedUser } = getState()
            _saveQuestionAnswer({ authedUser, qid, answer })
                .then(() => {
                    dispatch(saveUserAnswer({ authedUser, qid, answer }))
                    dispatch(saveQuestionAnswer({ authedUser, qid, answer }))
                    showNotification('success', 'Successfully saved poll answer')
                    dispatch(hideLoading())
                }).catch(() => {
                    dispatch(hideLoading())
                })
        }, 1000)

    }


}


export const handleSavePollQuestion = ({ optionOneText, optionTwoText }, history) => {

    return (dispatch, getState) => {
        dispatch(showLoading())
        setTimeout(() => {
            const { authedUser: author } = getState()
            _saveQuestion({ author, optionOneText, optionTwoText })
                .then((formattedQuestion) => {
                    dispatch(saveQuestion(formattedQuestion))
                    dispatch(saveUserQuestion(formattedQuestion))
                    history.push('/')
                    showNotification('success', 'Successfully saved poll question')
                    dispatch(hideLoading())
                }).catch(() => {
                    dispatch(hideLoading())
                })
        }, 1000)

    }


}


export const showLoading = () => ({
    type: SET_LOADING,
    payload: true
})

export const hideLoading = () => ({
    type: SET_LOADING,
    payload: false
})