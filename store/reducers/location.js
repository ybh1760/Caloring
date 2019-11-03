import { SET_LOCATION } from '../actions/location'
import Place from '../../models/Place'

const initialState = {
    location: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION:
            const newPlace = new Place('p1', action.coord.lat, action.coord.lng)
            return {
                location: state.location.concat(newPlace),
            }
        default:
            return state
    }
}
