import { SAVE_TIME } from '../actions/time'
import TimeStamp from '../../models/TimeStamp'

const initialState = {
    timeStamp: [new TimeStamp(0)],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TIME:
            const newTimeStamp = new TimeStamp(action.sec)
            if (action.isFinished) {
                return {
                    timeStamp: state.timeStamp.concat(
                        newTimeStamp,
                        new TimeStamp(0)
                    ),
                }
            } else {
                const updatedTimeStamp = state.timeStamp
                const index = updatedTimeStamp.length - 1
                updatedTimeStamp[index].sec = action.sec
                return {
                    timeStamp: updatedTimeStamp,
                }
            }
    }
    return state
}
