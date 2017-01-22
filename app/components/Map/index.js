import React, {Component} from 'react'
import { connect } from 'react-redux'
import { actions } from 'react-native-navigation-redux-helpers'
import { View, Text } from 'react-native'
import { Container, Footer, Button } from 'native-base'
import MapView from 'react-native-maps'
import randomMC from 'random-material-color'
import styles from './styles'
import RecommendMarker from './RecommendMarker'
import NormalMarker from './NormalMarker'

import initial from '../../data/initial.json'
import markers from '../../data/locations.json'
Object.keys(markers).forEach((keyMap) => markers[keyMap].color = randomMC.getColor({shades: ['800', '900']}))




const { pushRoute } = actions;

class Map extends Component {

    render () {
        
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
                        loadingEnabled={true}
                        // onMarkerPress={() => alert('onMarkerPress')}
                        // onMarkerSelect={() => alert('onMarkerSelect')}
                        // onMarkerDeselect={() => alert('onMarkerDeselect')}
                        // onCalloutPress={() => alert('onCalloutPress')}
                        // onMarkerDragStart={() => alert('onMarkerDragStart')}
                        // onMarkerDrag={() => alert('onMarkerDrag')}
                        // onMarkerDragEnd={() => alert('onMarkerDragEnd')}
                    >
                        {
                            Object.keys(markers).map((keyMap) => (
                                   <NormalMarker
                                        latitude = { parseFloat(markers[keyMap].latitude) } 
                                        longitude = { parseFloat(markers[keyMap].longitude) }
                                        color = { markers[keyMap].color }
                                        name = { markers[keyMap].name }
                                        key = { keyMap }
                                        go = { () => this.props.go({key : 'question'}, this.props.globalNav.key) }
                                    />
                            ))
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

