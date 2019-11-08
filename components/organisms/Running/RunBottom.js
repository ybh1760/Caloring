import React, { useState } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import * as Location from 'expo-location'

import * as timeActions from '../../../store/actions/time'
import * as distActions from '../../../store/actions/distance'
import * as userDataActions from '../../../store/actions/userData'
import Status from '../../molecules/container/StatusContainer'
import Colors from '../../../constants/Colors'
import IconButton from '../../molecules/button/icon/IconCircle'
import caloringTracker from '../../../functions/caloringTracker'
import { verifyLocationPermissions } from '../../../functions/verifyPermissions'
import DisplayDatas from '../DisplayDatas'
import StartRun from '../../atoms/button/StartRun'
import PauseRun from '../../atoms/button/PauseRun'
import StopRun from '../../atoms/button/StopRun'

let resultId
const { width, height } = Dimensions.get('window')

export default function Bottom(props) {
    const [isRunning, setIsRunnig] = useState(false)
    const [timeId, setTimeId] = useState()
    // const userData = useSelector(state => state.userData.userData)

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
        props.isRun(true)
        const time = setInterval(() => {
            setSec(prev => prev + 1)
        }, 1000)
        setTimeId(time)
    }

    const watchPosition = async () => {
        const hasPermission = await verifyLocationPermissions()
        if (!hasPermission) {
            throw new Error('permission이 없어!!!!!')
        }
        try {
            const result = await Location.watchPositionAsync(
                { timeInterval: 10000, distanceInterval: 10 },
                position => {
                    setMeter(prev => prev + 10)
                }
            )
            resultId = result
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    const stopRunning = async () => {
        clearInterval(timeId)
        await dispatch(timeActions.saveTime(sec, false))
        await dispatch(distActions.setDistance(meter, false))
        // if (userData.id !== undefined) {
        //     userData.exercising = Math.floor((meter / userData.goal) * 100)
        //     console.log(userData)
        //     dispatch(userDataActions.updateUserData(userData))
        // }
        setIsRunnig(false)
        props.isRun(false)
    }

    const finishRunning = async () => {
        clearInterval(timeId)
        await dispatch(timeActions.saveTime(sec, true))
        await dispatch(distActions.setDistance(meter, true))
        if (resultId) {
            resultId.remove()
        }

        // if (userData.id !== undefined) {
        //     userData.exercising = Math.floor((meter / userData.goal) * 100)
        //     dispatch(userDataActions.updateUserData(userData))
        // }
        setIsRunnig(false)
        props.isRun(false)
        props.navigation.navigate('Result')
    }

    return (
        <View style={styles.bottom}>
            <View style={styles.container}>
                <Status
                    image="grey"
                    title="칼로링포인트"
                    color={Colors.calGauge}
                    // score={userData.exercising}
                    // gauge={caloringTracker(userData.exercising)}
                />

                <DisplayDatas
                    layerSize={15}
                    dataSize={35}
                    meter={meter}
                    sec={sec}
                />

                <View style={styles.actions}>
                    <IconButton
                        onPress={finishRunning}
                        color={Colors.iconButtonGrey}
                    >
                        <StopRun width={28} height={28} fill="white" />
                    </IconButton>
                    {!isRunning ? (
                        <IconButton
                            onPress={() => {
                                startRunning()
                                if (meter === 0) {
                                    watchPosition()
                                }
                            }}
                            color={Colors.yellow}
                        >
                            <StartRun width={28} height={28} fill="white" />
                        </IconButton>
                    ) : (
                        <IconButton onPress={stopRunning} color={Colors.yellow}>
                            <PauseRun width={28} height={28} fill="white" />
                        </IconButton>
                    )}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottom: {
        width: width,
        height: height * 0.39,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    container: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: '90%',
        height: height * 0.32,
        backgroundColor: '#fff',
        elevation: 6,
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    actions: {
        width: '65%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
})
