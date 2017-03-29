import React, {Component} from 'react'
import { View } from 'react-native'
import { Button } from 'native-base'
import styles from './styles.js'
import { connect } from 'react-redux'
import { selectChoice } from '../../../../actions/answers'
import { changeQuestion } from '../../../../actions/questionNo'
import { setQuestionState } from '../../../../actions/appState'

import { actions } from 'react-native-navigation-redux-helpers'
const { popRoute } = actions

class Choice extends Component {
    render () {
        return (
            <View>
                {
                    this.props.questionData.answers.map((answer, index) => (
                        <Button
                            onPress={() => this.props.selectChoice(index)}
                            key={index}
                            block
                            large
                            style={(this.props.selectedAnswers[this.props.questionNo] === index ? [styles.buttonChoice, styles.buttonChoiceSelected] : styles.buttonChoice)}
                        >
                            { answer.text }
                        </Button>
                    ))
                }
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    selectedAnswers : state.answers
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    selectChoice: (index) => {
        dispatch(selectChoice(ownProps.questionNo, index))
        if (ownProps.questionNo + 2 > ownProps.questionAmount) {
            dispatch(setQuestionState(true))
            dispatch(popRoute(ownProps.globalNav.key))
        }
        else {
            dispatch(changeQuestion(ownProps.questionNo + 1))
        }
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Choice)
