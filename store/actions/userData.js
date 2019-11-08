import data from '../../secure.config'

export const SET_USER_DATA = 'SET_USER_DATA'
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA'

export const setUser1Data = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${data.AwsUrl}/user?id=1`)
            if (!response.ok) {
                throw new Error('response에 문제가 있어요')
            }
            const resData = await response.json()
            if (!resData) {
                throw new Error('resData가 없어요')
            }
            dispatch({ type: SET_USER_DATA, userData: resData })
        } catch (err) {
            console.log(err.message)
            throw err
        }
    }
}

export const setUser2Data = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${data.AwsUrl}/user?id=2`)
            if (!response.ok) {
                throw new Error('response에 문제가 있어요')
            }
            const resData = await response.json()
            if (!resData) {
                throw new Error('resData가 없어요')
            }
            dispatch({ type: SET_USER_DATA, userData: resData })
        } catch (err) {
            console.log('로딩오류')
            throw err
        }
    }
}

export const updateUserData = userData => {
    return async dispatch => {
        try {
            const response = await fetch(`${data.AwsUrl}/caloring/1`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: userData.id,
                    name: userData.name,
                    exercising: 200,
                    goal: userData.goal,
                    caloring: userData.caloring,
                    fat: userData.fat,
                }),
            })
            if (!response.ok) {
                return new Error('responce error!')
            }
            dispatch({
                type: UPDATE_USER_DATA,
                exercising: userData.exercising,
            })
        } catch (err) {
            console.log(err.message)
            throw err
        }
    }
}
