import { combineReducers } from 'redux'
import globalNav from './globalNav'
import appState from './appState'
import questionNo from './questions/questionNo'
import answers from './questions/answers'

export default combineReducers({
    appState,
    globalNav,
    questionNo,
    answers
})
