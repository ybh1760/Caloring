import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ImageBackground,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import * as Location from 'expo-location'

import * as timeActions from '../../store/actions/time'
import * as distActions from '../../store/actions/distance'

export default function MapPage(props) {
    const [isRunning, setIsRunnig] = useState(false)
    const [timeId, setTimeId] = useState()
    const [disId, setDisId] = useState()
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

    const watchPosition = async () => {
        try {
            const result = await Location.watchPositionAsync(
                { timeInterval: 10000, distanceInterval: 5 },
                position => {
                    if (!meter) {
                        setMeter(5)
                    } else {
                        setMeter(prev => prev + 5)
                    }
                }
            )
            setDisId(result)
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    const stopRunning = () => {
        clearInterval(timeId)
        dispatch(timeActions.saveTime(sec, false))
        setIsRunnig(false)
    }
    const finishRunning = () => {
        clearInterval(timeId)
        dispatch(timeActions.saveTime(sec, true))
        dispatch(distActions.setDistance(meter))
        disId.remove()
        props.navigation.goBack()
    }

    return (
        <ImageBackground style={styles.imageBackground} source={{ uri: null }}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: null }} />
            </View>
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
                                    // watchPosition()
                                }
                            }}
                        />
                    ) : (
                        <Button title="멈추기" onPress={stopRunning} />
                    )}
                    <Button title="종료" onPress={finishRunning} />
                </View>
            </View>
        </ImageBackground>
    )
}

MapPage.navigationOptions = {
    headerTitle: '운동중',
}

const styles = StyleSheet.create({
    imageBackground: { flex: 1 },
    container: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: '90%',
        height: 280,
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
    imageContainer: { width: '80%', height: '30%', alignSelf: 'center' },
    image: { width: '100%', height: '100%' },
})
