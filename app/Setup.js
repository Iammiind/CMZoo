import React, {Component} from 'react'
import { Text, TextInput, StyleSheet, View,  } from 'react-native'
import { Container, Header, Content, Footer, Icon, Button } from 'native-base'

export default class extends Component {
    render () {
        return (
            <Container>
                <View style = {styles.viewWrapper}>
                    <View style = {styles.viewQuestion}>
                        <Text style = {styles.questionText}>เอาช้างใส่ตู้เย็น มีกี่ขั้นตอน ?</Text>
                    </View>
                </View>

                <Content>
                    <View style={styles.viewContent}>
                        <TextInput keyboardType = "numeric" style = {styles.textInput}/>
                        <Button warning textStyle = {styles.buttonOkText} style = {styles.buttonOk}>OK</Button>
                    </View>
                </Content>

                <Footer style = {styles.viewButtonBack}>
                     <Button transparent style = {styles.buttonBack}>
                        <Icon name = "ios-arrow-back" /> Back
                     </Button>
                </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    viewWrapper : {
        flexDirection : 'column'
    },
    questionText : {
        color : '#FFFFFF',
        fontSize : 40,
        textAlign : 'center'
    },
    viewQuestion : {
        backgroundColor: '#1565C0',
        flex : 0,
        padding : 30
    },
    viewResult : {
        padding : 20
    },
    buttonResultText : {
        fontSize : 20
    },
    buttonResult : {
        marginTop : 10
    },
    buttonBackText : {
        fontSize : 20,
        color : '#0D47A1',
    },
    buttonBack : {
        flex : 1,
        justifyContent : 'center',
        alignSelf : 'stretch'
    },
    viewButtonBack : {
        flexDirection : 'row'
    },
    textInput : {
        height : 100,
        borderColor : 'gray',
        borderWidth : 1,
        fontSize : 32,
        textAlign : 'center'
    },
    viewContent : {
        marginTop : 25,
        alignItems: 'center',
        flexDirection: 'column',
        padding: 40
    },
    buttonOkText : {
        fontSize : 20
    },
    buttonOk : {
        marginTop: 30,
        alignSelf: 'stretch',
    }
})
