import React, {Component} from 'react'
import { View, TextInput } from 'react-native'
import { Button, Icon } from 'native-base'
import styles from './styles'

export default class extends Component {
    render () {
        return (
            <View style={styles.container}>
                <TextInput keyboardType="numeric" style={styles.textInput} />
                <Button style={styles.button}>
                    OK
                    <Icon name="ios-send" />
                </Button>
            </View>
        )
    }
}