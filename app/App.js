import React, { Component } from 'react'
import { NavigationExperimental } from 'react-native'
import { connect } from 'react-redux'
import { actions } from 'react-native-navigation-redux-helpers' //action creator
import { View, StatusBar } from 'react-native'

// Components
import Map from './components/Map'
import Questions from './components/Questions'

const {
    CardStack: NavigationCardStack
} = NavigationExperimental

const {
    pushRoute
} = actions

class App extends Component {

    componentDidMount () {
        if (!this.props.appState.question) {
            this.props.go({ key : 'question' }, this.props.globalNav.key)
        }
    }

    __renderStatusBar(route) {
        let barStyle;
        switch (route.scene.route.key) {
            case 'map' :
                barStyle = 'dark-content'
                break
            case 'question' :
                barStyle = 'light-content'
                break
            default :
                barStyle = 'dark-content'
        }
        return <StatusBar barStyle={barStyle} />
    }

    __renderScene(route) {
        switch (route.scene.route.key) {
            case 'map' :
                return <Map />
            case 'question' :
                return <Questions />
            default :
                return <Map />
        }
    }

    render () {
        return (
            <NavigationCardStack
                navigationState={this.props.globalNav}
                renderScene={(route) => (
                    <View style={{flex : 1}}>
                        {this.__renderStatusBar(route)}
                        {this.__renderScene(route)}
                    </View>
                )}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    appState : state.appState,
    globalNav: state.globalNav
})

export default connect(
    mapStateToProps,
    { go : pushRoute }
)(App)
