import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import * as Location from 'expo-location'

import * as timeActions from '../../../store/actions/time'
import * as distActions from '../../../store/actions/distance'
import * as userDataActions from '../../../store/actions/userData'
import Status from '../../molecules/container/StatusContainer'
import Colors from '../../../constants/Colors'
import IconButton from '../../molecules/button/icon/IconButton'
import caloringTracker from '../../../functions/caloringTracker'
import { verifyLocationPermissions } from '../../../functions/verifyPermissions'
import { minTimer, secTimer } from '../../atoms/timer/Timer'
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

    useEffect(() => {
        return () => {}
    }, [])

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
        // if (userData.id !== undefined) {
        //     userData.exercising = Math.floor((meter / userData.goal) * 100)
        //     console.log(userData)
        //     dispatch(userDataActions.updateUserData(userData))
        // }
        setIsRunnig(false)
        props.isRun(false)
    }

    const finishRunning = () => {
        clearInterval(timeId)
        dispatch(timeActions.saveTime(sec, true))
        dispatch(distActions.setDistance(meter, true))
        if (resultId) {
            resultId.remove()
        }

        // if (userData.id !== undefined) {
        //     userData.exercising = Math.floor((meter / userData.goal) * 100)
        //     dispatch(userDataActions.updateUserData(userData))
        // }
        props.isRun(false)
        props.isFin(true)
        props.navigation.navigate('Result')
    }

    const meterCheck =
        meter > 100 ? (
            <Text>00.{Math.floor(meter / 10)}</Text>
        ) : (
            <Text>00.0{Math.floor(meter / 10)}</Text>
        )

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

                <View style={styles.runDataContainer}>
                    <View style={styles.layor}>
                        <Text style={{ fontSize: 15 }}>DISTANCE</Text>
                        <Text style={{ fontSize: 15 }}>TIME</Text>
                    </View>
                    <View style={styles.runData}>
                        <Text style={styles.timerText}>{meterCheck}</Text>

                        <Text style={styles.timerText}>
                            {minTimer(sec)}
                            {secTimer(sec)}
                        </Text>
                    </View>
                </View>

                <View style={styles.actions}>
                    <IconButton
                        name="md-square"
                        onPress={finishRunning}
                        color={Colors.iconButtonGrey}
                    />
                    {!isRunning ? (
                        <IconButton
                            name="md-arrow-dropright"
                            onPress={() => {
                                startRunning()
                                if (meter === 0) {
                                    watchPosition()
                                }
                            }}
                            color={Colors.yellow}
                        />
                    ) : (
                        <IconButton
                            name="md-pause"
                            onPress={stopRunning}
                            color={Colors.yellow}
                        />
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
    runDataContainer: {
        width: '100%',
        height: '35%',
    },
    layor: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 60,
        paddingLeft: 45,
    },
    runData: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 30,
        paddingLeft: 43,
    },
    timer: {
        margin: 15,
    },
    timerText: {
        fontSize: 30,
    },
    actions: {
        width: '75%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
})
