import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import CaloringNavigator from './navigation/CaloringNavigator'
import timeReducer from './store/reducers/time'
import locationReducer from './store/reducers/location'
import distancdReducer from './store/reducers/distance'

const rootReducer = combineReducers({
    time: timeReducer,
    location: locationReducer,
    distance: distancdReducer,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
    return (
        <Provider store={store}>
            <CaloringNavigator />
        </Provider>
    )
}
