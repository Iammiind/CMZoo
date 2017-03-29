import React, {Component} from 'react'
import { connect } from 'react-redux'
import { actions } from 'react-native-navigation-redux-helpers'
import { View, Text, StatusBar } from 'react-native'
import { Container, Content, Footer, Button, Icon } from 'native-base'
import { changeQuestion } from '../../../actions/questionNo'
import styles from './styles'

import Choice from './Choice'
import Fill from './Fill'

const { popRoute } = actions;
class Question extends Component {


    showAnswerForm() {
        switch (this.props.questionData.type) {
            case 'choice' :
                return <Choice {...this.props} />
            case 'number' :
                return <Number {...this.props} />
        }
    }

    showFooter() {
        if (this.props.questionNo !== 0) {
            return (
                <Footer style={styles.viewFooter}>
                     <Button transparent style={styles.buttonBack} onPress={() => this.props.back()}>
                        <Icon name="ios-arrow-back" />Back
                     </Button>
                </Footer>
            )
        }
    }

    render () {
         return (
             <Container>
                <View style={styles.viewQuestion}>
                    <Text style = {styles.textQuestion}>
                        { this.props.questionData.question }
                    </Text>
                </View>
                <Content>
                    <View style={styles.viewAnswer}>
                        { this.showAnswerForm() }
                    </View>
                </Content>
                { this.showFooter() }
            </Container>
         )
     }
 }
 

 const mapStateToProps = (state) => ({
    globalNav: state.globalNav,
    questionNo: state.questionNo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    back: (index) => {
        dispatch(changeQuestion(ownProps.questionNo - 1))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question)

