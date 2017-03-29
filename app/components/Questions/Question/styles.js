import { StyleSheet } from 'react-native'
import { lightGreen } from 'material-colors'

export default StyleSheet.create({
    viewQuestion : {
        flex : 0,
        backgroundColor: lightGreen['900'],
        paddingTop: 60,
        paddingBottom : 50,
        paddingLeft : 30,
        paddingRight : 30
    },
    textQuestion : {
        color : '#FFF',
        fontSize : 37,
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
