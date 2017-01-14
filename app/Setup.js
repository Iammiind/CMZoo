import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from './App'
import Store from './Store'

export default class extends Component {
    render () {
        return (
            <Provider store={Store()}>
                <App />
            </Provider>
        )
    }
}
