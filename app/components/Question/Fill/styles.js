import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container : {
        flexDirection : 'column',
        alignItems : 'center'
    },
    textInput : {
        height : 100,
        borderColor : 'grey',
        borderWidth: 1,
        textAlign : 'center',
        backgroundColor : '#EEE', // Change to material laterz
        fontSize : 32
    },
    button : {
        marginTop : 30,
        alignSelf : 'stretch',
        justifyContent : 'center'
    }
})
