import { SET_DISTANCE, SET_WATCHID } from '../actions/distance'

const initialState = {
    distance: [0],
    disId: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DISTANCE:
            if (action.isFinished) {
                return {
                    distance: state.distance.concat(action.distance),
                }
            } else {
                const updatedDistance = state.distance
                const index = updatedDistance.length - 1
                updatedDistance[index] = action.distance
                return {
                    ...state,
                    distance: updatedDistance,
                }
            }
        case SET_WATCHID:
            return {
                ...state,
                disId: action.watchId,
            }
        default:
            return state
    }
}
