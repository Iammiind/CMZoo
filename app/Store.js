import { createStore, applyMiddleware, compose } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import reducer from './reducers'
import devTools from 'remote-redux-devtools'
import { Platform } from 'react-native'

export default () => {
    const enhancer = compose(
        applyMiddleware(thunk),
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678
        })
        // autoRehydrate()
    )
    const store = createStore(reducer, enhancer)
    persistStore(store, { storage: AsyncStorage, blacklist: ['globalNav'] })
    return store
}
