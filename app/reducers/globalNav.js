import { cardStackReducer } from 'react-native-navigation-redux-helpers'

const initialState = {
    key: 'global',
    index: 0,
    routes: [
        {
            key: 'map'
        },
    ]
}

export default cardStackReducer(initialState)
