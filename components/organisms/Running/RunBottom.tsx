import React, { useState } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import * as Location from 'expo-location'
import styled from 'styled-components/native'

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
import FontSize from '../../../constants/FontSize'
import Rem from '../../../constants/Rem'

let resultId: any
const { width, height } = Dimensions.get('window')

export default function RunBottom(props: any) {
    const [isRunning, setIsRunnig] = useState(false)
    const [timeId, setTimeId] = useState()
    // const userData = useSelector(state => state.userData.userData)

    const savedTimeStamp = useSelector((state: any) => state.time.timeStamp)
    const timeIndex = savedTimeStamp.length - 1

    const savedDistance = useSelector((state: any) => state.distance.distance)
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
            setSec((prev: number) => prev + 1)
        }, 1000)
        setTimeId(time)
    }

    const watchPosition = async () => {
        const hasPermission = await verifyLocationPermissions()
        if (!hasPermission) {
            throw new Error('Location Permission Error')
        }
        try {
            const result = await Location.watchPositionAsync(
                { timeInterval: 10000, distanceInterval: 10 },
                position => {
                    setMeter((prev: number) => prev + 10)
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

        setIsRunnig(false)
        props.isRun(false)
        props.navigation.navigate('Result')
    }

    return (
        <Wrapper>
            <MainContent>
                <Status
                    image="grey"
                    title="칼로링포인트"
                    color={Colors.calGauge}
                    score={70}
                    gauge={70}
                    status="caloring"
                />

                <DisplayDatas
                    layorSize={FontSize(1)}
                    dataSize={FontSize(4)}
                    meter={meter}
                    sec={sec}
                />

                <ActionContainer>
                    <IconButton onPress={finishRunning} color={Colors.stopGrey}>
                        <StopRun
                            width={Rem() * 2}
                            height={Rem() * 2}
                            fill="white"
                        />
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
                            <StartRun
                                width={Rem() * 2}
                                height={Rem() * 2}
                                fill="white"
                            />
                        </IconButton>
                    ) : (
                        <IconButton onPress={stopRunning} color={Colors.grey}>
                            <PauseRun
                                width={Rem() * 2}
                                height={Rem() * 2}
                                fill="white"
                            />
                        </IconButton>
                    )}
                </ActionContainer>
            </MainContent>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    width: width,
    height: height * 0.39,
    justifyContent: 'flex-end',
    alignItems: 'center',
})

const MainContent = styled.View({
    width: '95%',
    height: height * 0.32,
    backgroundColor: '#fff',
    elevation: 6,
    paddingHorizontal: FontSize(2),
    paddingTop: FontSize(1),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
})

const ActionContainer = styled.View({
    width: '65%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
})
