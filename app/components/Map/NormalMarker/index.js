import React, {Component} from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import styles from './styles'

export default (props) => (
    <MapView.Marker
        coordinate = {{
            latitude : props.latitude,
            longitude : props.longitude
        }}
    >
        <View style = { styles.wrapper }>
            <View style = {[
                styles.tag,
                {
                    borderColor: props.color
                }
            ]}>
                <Text style = {[
                    styles.name,
                    {
                        color : props.color
                    }
                ]}>
                    { props.name }
                </Text>
            </View>
            <View style={[
                styles.line,
                {
                    borderColor: props.color
                }
            ]}>
            </View>
        </View>
    </MapView.Marker>
)


