export const SAVE_TIME = 'SAVE_TIME'

export const saveTime = (sec, isFinished) => {
    return {
        type: SAVE_TIME,
        isFinished: isFinished,
        sec: sec,
    }
}
