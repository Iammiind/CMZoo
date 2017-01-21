import React, {Component} from 'react'
import { NavigationExperimental } from 'react-native'
import { connect } from 'react-redux'
import { View ,StatusBar, Text } from 'react-native'

// Components
import Map from './components/Map'
import Question from './components/Question'

const {
    CardStack: NavigationCardStack
} = NavigationExperimental

class App extends Component {

    __renderStatusBar(route) {
        switch (route.scene.route.key) {
            case 'map' :
                return <StatusBar
                    barStyle="dark-content"
                />
            case 'question' :
                return <StatusBar
                    barStyle="light-content"
                />
            default :
                return <StatusBar
                    barStyle="dark-content"
                />
        }
    }

    __renderScene(route) {
        switch (route.scene.route.key) {
            case 'map' :
                return <Map />
            case 'question' :
                return <Question />
            default :
                return <Map />
        }
    }

    render () {
        return (
            <NavigationCardStack
                navigationState={this.props.globalNav}
                renderScene={(route) => ((
                    <View style={{flex : 1}}>
                       { this.__renderStatusBar(route) }
                       { this.__renderScene(route) }
                    </View>
                ))}
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
