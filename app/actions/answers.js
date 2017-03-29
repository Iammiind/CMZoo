export const ADD_ANSWER = 'ADD_ANSWER'

export const selectChoice = (questionID, answerIndex) => ({
    type: ADD_ANSWER,
    questionID,
    answerIndex
})
