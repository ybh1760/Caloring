export const SET_USER_DATA = 'SET_USER_DATA'
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA'
export const ATTACK = 'ATTACK'

export const setUser1Data = () => {
    return async dispatch => {
        try {
            const response = await fetch(`15.164.129.166:8080/user?id=1`)
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

export const setUser2Data = () => {
    return async dispatch => {
        try {
            const response = await fetch(`url/user/?id=2`)
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
            const response = await fetch(`url/caloring/${userData.id}`, {
                method: 'PUT',
                headers: { contentType: 'application/json' },
                body: JSON.stringify({
                    id: userData.id,
                    name: userData.name,
                    exercising: userData.exercising,
                    goal: userData.goal,
                    caloring: userData.caloring,
                    fat: userData.fat,
                }),
            })
            if (!response.ok) {
                throw new Error('response에 문제가 있어요')
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

export const attack = friendId => {
    return async dispatch => {
        try {
            const response = await fetch(`url/user/${friendId}/attack`, {
                method: 'PUT',
                headers: { contentType: 'application/json' },
                body: JSON.stringify({
                    message: 'ok',
                }),
            })
            if (!response.ok) {
                throw new Error('attack이 안됨')
            }
            // response 처리 및  PUT  방식으로 공격할 때 request 보낼 데이터
        } catch (err) {
            console.log(err.message)
            throw err
        }

        dispatch({ type: 'ATTACK' })
    }
}
