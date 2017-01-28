import { ADD_ANSWER, EDIT_ANSWER } from '../../actions/answers'
import answer from './answer'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_ANSWER :
            return [
                ...state,
                answer(state, action)
            ]
        case EDIT_ANSWER :
            return state.map(a => answer(a, action))
        default :
            return state;
    }
}