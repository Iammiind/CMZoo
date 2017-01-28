import { combineReducers } from 'redux'
import globalNav from './globalNav'
import appState from './appState'
import questionsNo from './questions/questionsNo'
import answers from './questions/answers'

export default combineReducers({
    appState,
    globalNav,
    questionsNo,
    answers
})
