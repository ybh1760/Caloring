import React, { useState } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import * as Font from 'expo-font'

import CaloringNavigator from './navigation/CaloringNavigator'
import timeReducer from './store/reducers/time'
import locationReducer from './store/reducers/location'
import distanceReducer from './store/reducers/distance'
import userData from './store/reducers/userData'
import Loading from './components/pages/Loading'

const rootReducer = combineReducers({
    time: timeReducer,
    location: locationReducer,
    distance: distanceReducer,
    userData: userData,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const fetchFont = () => {
    return Font.loadAsync({
        'roboto-black': require('./assets/fonts/Roboto-Black.ttf'),
    })
}

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false)

    if (!fontLoaded) {
        return (
            <Loading
                startAsync={fetchFont}
                onFinished={() => {
                    setFontLoaded(true)
                }}
            />
        )
    }

    return (
        <Provider store={store}>
            <CaloringNavigator />
        </Provider>
    )
}
