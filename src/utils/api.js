import {
    _getUsers,
    _getQuestions
} from './_DATA'


export const getInitialData = () => {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
}



export const redirectUserBackToHomeIfLoggedIn = (history) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        history.push('/');
    }
}