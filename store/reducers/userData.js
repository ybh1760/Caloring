import { SET_USER_DATA, UPDATE_USER_DATA } from '../actions/userData'
import UserData from '../../models/UserData'

const initialState = {
    userData: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            const newUserData = new UserData(
                action.userData.id,
                action.userData.exercising,
                action.userData.goal,
                action.userData.caloring,
                action.userData.fat
            )
            return {
                userData: newUserData,
            }
        case UPDATE_USER_DATA:
            return {
                userData: {
                    ...state.userData,
                    [exercising]: action.exercising,
                },
            }
        default:
            return state
    }
}
