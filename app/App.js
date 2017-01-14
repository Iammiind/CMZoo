import React, {Component} from 'react'
import { NavigationExperimental } from 'react-native'
import { connect } from 'react-redux'
import { View ,StatusBar } from 'react-native'
import Map from './components/Map'
import Question from './components/Question'

const {
    CardStack: NavigationCardStack
} = NavigationExperimental

class App extends Component {

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
            <View style={{flex : 1}}>
            <StatusBar
     backgroundColor="blue"
     barStyle="light-content"
   />
            <NavigationCardStack
                navigationState={this.props.globalNav}
                renderScene={this.__renderScene}
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
