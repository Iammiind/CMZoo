import React, {Component} from 'react'
import { View } from 'react-native'
import { Button } from 'native-base'
import styles from './styles.js'

export default class extends Component {
    render () {
        return (
            <View>
                <Button block large style={styles.buttonChoice}>ใช่</Button>
                <Button block large style={styles.buttonChoice}>ไม่ใช่</Button>
                <Button block large style={styles.buttonChoice}>อาจจะ</Button>
            </View>
        )
    }
}
