import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import Question from './Question'
import { questions } from '../../data/questions.json'

class Questions extends Component {
    render () {
        return (
            <Question
                questionAmount={questions.length}
                questionData={questions[this.props.questionNo]}
                questionNo={this.props.questionNo}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    questionNo : state.questionNo
})

export default connect(
    mapStateToProps
)(Questions)
