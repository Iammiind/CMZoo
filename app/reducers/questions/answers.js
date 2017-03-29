import { ADD_ANSWER } from '../../actions/answers'

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_ANSWER :
            let answers = { ...state }
            answers[action.questionID] = action.answerIndex
            return answers
        default :
            return state
    }
}
