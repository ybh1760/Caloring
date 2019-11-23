import React, { useState } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import * as Font from 'expo-font'

import CaloringNavigator from './navigation/CaloringNavigator'
import timeReducer from './store/reducers/time'
import distanceReducer from './store/reducers/distance'
import userData from './store/reducers/userData'
import Loading from './components/pages/LoadingPage'

const rootReducer = combineReducers({
    time: timeReducer,
    distance: distanceReducer,
    userData: userData,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const fetchFont = () => {
    return Font.loadAsync({
        black: require('./assets/fonts/Roboto-Black.ttf'),
        blackItalic: require('./assets/fonts/Roboto-BlackItalic.ttf'),
        bold: require('./assets/fonts/Roboto-Bold.ttf'),
        boldItalic: require('./assets/fonts/Roboto-BoldItalic.ttf'),
        italic: require('./assets/fonts/Roboto-Italic.ttf'),
        light: require('./assets/fonts/Roboto-Light.ttf'),
        ligthItalic: require('./assets/fonts/Roboto-LightItalic.ttf'),
        medium: require('./assets/fonts/Roboto-Medium.ttf'),
        mediumItalic: require('./assets/fonts/Roboto-MediumItalic.ttf'),
        regular: require('./assets/fonts/Roboto-Regular.ttf'),
        thin: require('./assets/fonts/Roboto-Thin.ttf'),
        thinItalic: require('./assets/fonts/Roboto-ThinItalic.ttf'),
        'robotoCondensed-bold': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
        'robotoCondensed-boldItalic': require('./assets/fonts/RobotoCondensed-BoldItalic.ttf'),
        'robotoCondensed-italic': require('./assets/fonts/RobotoCondensed-Italic.ttf'),
        'robotoCondensed-light': require('./assets/fonts/RobotoCondensed-Light.ttf'),
        'robotoCondensed-lightItalic': require('./assets/fonts/RobotoCondensed-LightItalic.ttf'),
        'robotoCondensed-regular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
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
