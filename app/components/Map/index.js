import React, {Component} from 'react'
import { connect } from 'react-redux'
import { actions } from 'react-native-navigation-redux-helpers'
import { View } from 'react-native'
import { Container, Footer, Button } from 'native-base'
import MapView from 'react-native-maps'
import styles from './styles'

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
                                latitude: 18.80750820701287,
                                longitude: 98.94688156780276,
                                latitudeDelta: 0.006570926966158908,
                                longitudeDelta: 0.004023313891480029
                            }
                        }
                    >
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

