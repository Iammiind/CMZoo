 import React, {Component} from 'react'
import { connect } from 'react-redux'
import { actions } from 'react-native-navigation-redux-helpers'
 import { View, Text, StatusBar } from 'react-native'
 import { Container, Content, Footer, Button, Icon } from 'native-base'
 import styles from './styles'

 import Choice from './Choice'
 import Fill from './Fill'

const { popRoute } = actions;
 class Question extends Component {
     
     render () {
         return (
             <Container>
                <View style={styles.viewQuestion}>
                    <Text style = {styles.textQuestion}>อยากได้คอมฟรีหรือไม่ ?</Text>
                </View>
                <Content>
                    <View style={styles.viewAnswer}>
                        <Choice />
                        <Fill />
                    </View>
                </Content>
                <Footer style={styles.viewFooter}>
                     <Button transparent style={styles.buttonBack} onPress={() => this.props.back(this.props.globalNav.key)}>
                        <Icon name="ios-arrow-back" />Back
                     </Button>
                </Footer>
            </Container>
         )
     }
 }
 

 const mapStateToProps = (state) => ({
    globalNav: state.globalNav
})

export default connect(
    mapStateToProps,
    { back : popRoute }
)(Question)

