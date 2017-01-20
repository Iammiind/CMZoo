import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'

class Marker extends Component {
    render () {
        console.log(this.props)
        return (
            <View style={{flex : 1 }}>
                <Text>DD</Text>
                <Image source={require("./pic2.jpg")} />
            </View>
        )
    }
}

export default Marker