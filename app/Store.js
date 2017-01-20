import { createStore, applyMiddleware, compose } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import reducer from './reducers'

export default () => {
    const enhancer = compose(
        applyMiddleware(thunk),
        autoRehydrate()
    )
    const store = createStore(reducer, enhancer)
    persistStore(store, { storage: AsyncStorage, blacklist: ['globalNav'] })
    return store
}
