import { StyleSheet } from 'react-native'
import { lightBlue } from 'material-colors'

export default StyleSheet.create({
    viewQuestion : {
        flex : 0,
        backgroundColor: lightBlue['900'],
        paddingTop: 50,
        paddingBottom : 30,
        paddingLeft : 30,
        paddingRight : 30
    },
    textQuestion : {
        color : '#FFF',
        fontSize : 35,
        textAlign : 'center'
    },
    viewAnswer : {
        paddingTop: 22.5,
        paddingLeft : 35,
        paddingRight : 35
    },
    viewFooter : {
        flexDirection : 'row'
    },
    buttonBack : {
        flex : 1,
        justifyContent : 'center',
        alignSelf : 'stretch'
    }
})
