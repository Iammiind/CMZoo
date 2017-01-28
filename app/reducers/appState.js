import { SET_QUESTION, SET_LAST_USAGE } from '../actions/appState'

const initialState = {
    lastUsage : Date.now(),
    question : false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LAST_USAGE :
            return {
                ...state,
                lastUsage : action.lastUsage
            }
        case SET_QUESTION :
            return {
                ...state,
                question : action.question
            }
        default :
            return state
    }
}
