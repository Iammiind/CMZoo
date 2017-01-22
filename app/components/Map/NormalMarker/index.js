import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import styles from './styles'

export default (props) => (
    <MapView.Marker
        coordinate = {{
            latitude : props.latitude,
            longitude : props.longitude
        }}
        pointerEvents="none"
        onSelect={ () => props.go() }
        onCalloutPress={ () => props.go() }
        calloutOffset = {
            {
                // x : -9,
                // y: 37
                x: 0,
                y: 45
            }
        }
    >
        <View style = { styles.wrapper } >
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
            ]} />
        </View>
        <MapView.Callout tooltip={true}>
            <View style={{backgroundColor: '#F00', flex: 1, opacity: 0.0}}>
                <Text>{props.name}</Text>
            </View>
        </MapView.Callout>
    </MapView.Marker>
)
