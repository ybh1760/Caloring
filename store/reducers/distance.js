import { SET_DISTANCE } from '../actions/distance'

const initialState = {
    distance: [0],
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
                    distance: updatedDistance,
                }
            }
        default:
            return state
    }
}
