import React, {Component} from 'react'
import { NavigationExperimental } from 'react-native'
import { connect } from 'react-redux'
import { View ,StatusBar } from 'react-native'

// Components
import Map from './components/Map'
import Question from './components/Question'

const {
    CardStack: NavigationCardStack
} = NavigationExperimental

class App extends Component {

    __renderScene(route) {
        switch (route.scene.route.key) {
            case 'map' :
                route.scene.route.barStyle = 'dark-content'
                return <Map />
            case 'question' :
                route.scene.route.barStyle = 'light-content'
                return <Question />
            default :
                route.scene.route.barStyle = 'dark-content'
                return <Map />
        }
    }

    render () {
        return (
            <View style={{flex : 1}}>
                <StatusBar
                    barStyle={this.props.globalNav.routes[this.props.globalNav.routes.length - 1].barStyle}
                />
                <NavigationCardStack
                    navigationState={this.props.globalNav}
                    renderScene={this.__renderScene.bind(this)}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    globalNav: state.globalNav
})

export default connect(
    mapStateToProps
)(App)
