export const SET_DISTANCE = 'SET_DISTANCE'
export const SET_WATCHID = 'SET_WATCHID'

export const setDistance = (meter, isFinished) => {
    return async dispatch => {
        dispatch({
            type: SET_DISTANCE,
            distance: meter,
            isFinished: isFinished,
        })
    }
}

export const setWatchId = watchId => {
    return async dispatch => {
        dispatch({ type: SET_WATCHID, watchId: watchId })
    }
}
