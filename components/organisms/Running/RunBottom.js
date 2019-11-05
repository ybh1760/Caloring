import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

import * as timeActions from '../../../store/actions/time'
import * as distActions from '../../../store/actions/distance'
import * as userDataActions from '../../../store/actions/userData'
import NickContainer from '../../molecules/container/NickContainer'

let resultId
const { width, height } = Dimensions.get('window')

export default function Bottom(props) {
    const [isRunning, setIsRunnig] = useState(false)
    const [timeId, setTimeId] = useState()
    const userData = useSelector(state => state.userData.userData)

    const savedTimeStamp = useSelector(state => state.time.timeStamp)
    const timeIndex = savedTimeStamp.length - 1

    const savedDistance = useSelector(state => state.distance.distance)
    const disIndex = savedDistance.length - 1

    const [meter, setMeter] = useState(
        savedDistance[disIndex] !== 0 ? savedDistance[disIndex] : 0
    )
    const [sec, setSec] = useState(
        savedTimeStamp[timeIndex] ? savedTimeStamp[timeIndex].sec : 0
    )

    const dispatch = useDispatch()

    const startRunning = () => {
        setIsRunnig(true)
        const time = setInterval(() => {
            setSec(prev => prev + 1)
        }, 1000)
        setTimeId(time)
    }

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION)
        if (result.status !== 'granted') {
            Alert.alert(
                'Insuffient Permissions',
                'you need to grant gps permission',
                [{ text: 'Okay' }]
            )
            return false
        }
        return true
    }

    const watchPosition = async () => {
        const hasPermission = await verifyPermissions()
        if (!hasPermission) {
            throw new Error('permission이 없어!!!!!')
        }

        try {
            const result = await Location.watchPositionAsync(
                { accuracy: 6, timeInterval: 10000, distanceInterval: 1 },
                position => {
                    setMeter(prev => prev + 1)
                }
            )
            resultId = result
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    const stopRunning = () => {
        clearInterval(timeId)
        dispatch(timeActions.saveTime(sec, false))
        dispatch(distActions.setDistance(meter, false))
        if (userData.id !== undefined) {
            userData.exercising = Math.floor((meter / userData.goal) * 100)
            dispatch(userDataActions.updateUserData(userData))
        }
        setIsRunnig(false)
    }

    const finishRunning = () => {
        clearInterval(timeId)
        dispatch(timeActions.saveTime(sec, true))
        dispatch(distActions.setDistance(meter, true))
        if (resultId) {
            resultId.remove()
        }

        if (userData.id !== undefined) {
            userData.exercising = Math.floor((meter / userData.goal) * 100)
            dispatch(userDataActions.updateUserData(userData))
        }
        props.navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.timer}>
                <Text>Distance:{meter}meters</Text>
                <Text style={styles.timerText}>{`${Math.floor(
                    sec / 60
                )} : ${sec % 60}`}</Text>
            </View>
            <View style={styles.actions}>
                {!isRunning ? (
                    <Button
                        title="시작"
                        onPress={() => {
                            startRunning()
                            if (meter === 0) {
                                watchPosition()
                            }
                        }}
                    />
                ) : (
                    <Button title="멈추기" onPress={stopRunning} />
                )}
                <Button title="종료" onPress={finishRunning} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: '90%',
        height: height * 0.32,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
    },
    timer: {
        margin: 15,
    },
    timerText: {
        fontSize: 15,
    },
    actions: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})
