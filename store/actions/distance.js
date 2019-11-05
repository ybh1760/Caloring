export const SET_DISTANCE = 'SET_DISTANCE'

export const setDistance = (meter, isFinished) => {
    return async dispatch => {
        dispatch({
            type: SET_DISTANCE,
            distance: meter,
            isFinished: isFinished,
        })
    }
}
