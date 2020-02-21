import { showNotification } from '../utils/showNotification'
import { addUser } from './usersActions';
import defaultUserLogo from '../assets/default.jpg'
import { showLoading, hideLoading } from './shared';
export const SET_AUTHED_USER = 'SET_AUTHED_USER'


export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}


export function clearUserInLocalStorage() {
    localStorage.setItem('user', null);
}


export const handleLoginUser = (id, { history, location }) => dispatch => {
    dispatch(showLoading())

    setTimeout(() => {
        dispatch(setAuthedUser(id))
        if (location.state && location.state.pathname) {
            history.push(location.state.pathname)
        } else {
            history.push('/')
        }
        localStorage.setItem('user', JSON.stringify(id));
        showNotification('success', 'Successfully logged in user')
        dispatch(hideLoading())

    }, 1000)

}


export const handleRegisterUser = ({ userName: id, fullName: name }, history) => dispatch => {
    dispatch(showLoading())
    setTimeout(() => {
        dispatch(addUser({
            id,
            name,
            avatarURL: defaultUserLogo,
            answers: {},
            questions: []
        }))

        history.push('/login')

        showNotification('success', 'Successfully registered user')

        dispatch(hideLoading())
    }, 1000)

}

export const logOutUser = (history) => dispatch => {
    
    dispatch(setAuthedUser(null));
    clearUserInLocalStorage()
    history.push('/login')
}



