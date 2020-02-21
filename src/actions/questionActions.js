
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION_ANSWER='SAVE_QUESTION_ANSWER'
export const SAVE_QUESTION='SAVE_QUESTION'

export const getQuestions = (questions) => ({
    type: GET_QUESTIONS,
    questions
})

export const saveQuestionAnswer = ({ authedUser, qid, answer}) => {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export const saveQuestion = (formattedQuestion) => {
    return {
        formattedQuestion,
        type: SAVE_QUESTION
    }
}