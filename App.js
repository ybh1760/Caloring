import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import CaloringNavigator from './navigation/CaloringNavigator'
import timeReducer from './store/reducers/time'
import locationReducer from './store/reducers/location'
import distanceReducer from './store/reducers/distance'
import userData from './store/reducers/userData'

const rootReducer = combineReducers({
    time: timeReducer,
    location: locationReducer,
    distance: distanceReducer,
    userData: userData,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
    return (
        <Provider store={store}>
            <CaloringNavigator />
        </Provider>
    )
}
