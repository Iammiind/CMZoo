import React, {Component} from 'react'
import { connect } from 'react-redux'
import { actions } from 'react-native-navigation-redux-helpers'
import { View, Text, Image } from 'react-native'
import { Container, Footer, Button } from 'native-base'
import MapView from 'react-native-maps'
import randomMC from 'random-material-color'
import styles from './styles'

import initial from '../../data/initial.json'
import markers from '../../data/locations.json'



const { pushRoute } = actions;

class Map extends Component {
    render () {
        this.markerNodes = {}
        return (
            <Container>
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        initialRegion={
                            {
                                latitude: parseFloat(initial.latitude),
                                longitude: parseFloat(initial.longitude),
                                latitudeDelta: parseFloat(initial.latitudeDelta),
                                longitudeDelta: parseFloat(initial.longitudeDelta)
                            }
                        }
                    >
                        {
                            Object.keys(markers).map((keyMap) => {
                                const color = randomMC.getColor({shades: ['800', '900']})
                                return (
                                    <MapView.Marker
                                        coordinate={{
                                            latitude : parseFloat(markers[keyMap].latitude),
                                            longitude : parseFloat(markers[keyMap].longitude)
                                        }}
                                        key={keyMap}
                                    >
                                        <View style={{marginBottom: 27 }}>
                                            <View style={{ borderWidth: 1, backgroundColor: color, borderColor: color }}>
                                                <Text style={{ color: '#FFF', fontSize: 12 }}>{markers[keyMap].name}</Text>
                                            </View>
                                            <View style={{ borderWidth: 1, borderColor: color, height: 15, width: 2, alignSelf: 'center' }}>
                                            </View>
                                        </View>
                                    </MapView.Marker>
                                ) 
                            })
                        }
                    </MapView>
                </View>
                <Footer>
                <Button onPress={() => this.props.go({key : 'question'}, this.props.globalNav.key)}>
                    Question
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
    { go : pushRoute }
)(Map)

