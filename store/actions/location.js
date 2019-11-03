export const SET_LOCATION = 'SET_LOCATION'

export const setLocation = (placeId, location) => {
    return dispatch => {
        dispatch({
            type: SET_LOCATION,
            placeId: placeId,
            coord: { lat: location.lat, lng: location.lng },
        })
    }
}
