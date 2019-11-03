export const SET_USER_DATA = 'SET_USER_DATA'

export const setUser1Data = () => {
    return async dispatch => {
        try {
            const response = await fetch(`url/user/?id=1`)
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
