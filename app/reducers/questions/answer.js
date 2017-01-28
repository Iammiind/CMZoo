import { ADD_ANSWER, EDIT_ANSWER } from '../../actions/answers'

export default (state, action) => {
    switch (action.type) {
        case ADD_ANSWER :
            return {
                questionID: action.questionID,
                answerIndex : action.answerIndex
            }
        case EDIT_ANSWER :
            if (state.questionID !== action.questionID) {
                return state;
            }
            return {
                ...state,
                answersIndex : action.answerIndex
            }
        default :
            return state
    }
}
