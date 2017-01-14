import React, {Component} from 'react'
import { NavigationExperimental } from 'react-native'
import { connect } from 'react-redux'

import Map from './components/Map'

const {
    CardStack: NavigationCardStack
} = NavigationExperimental

class App extends Component {

    __renderScene(route) {
        switch (route.scene.route.key) {
            case 'map' :
                return <Map />
            default :
                return <Map />
        }
    }

    render () {
        return (
            <NavigationCardStack
                navigationState={this.props.globalNav}
                renderScene={this.__renderScene}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    globalNav: state.globalNav
})

export default connect(
    mapStateToProps
)(App)
