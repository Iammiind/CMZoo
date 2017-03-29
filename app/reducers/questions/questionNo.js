import { CHANGE_QUESTION } from '../../actions/questionNo'

export default (state = 0, action) => {
    switch (action.type) {
        case CHANGE_QUESTION :
            return action.questionID
        default :
            return state;
    }
}
