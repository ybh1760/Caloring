import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    Alert,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import styled from 'styled-components/native'

import HeaderButton from '../molecules/button/HeaderButton'
import RunBottom from '../organisms/Running/RunBottom'
import IconButton from '../molecules/button/icon/Icon'
import LeftArrow from '../atoms/button/LeftArrow'
import runImageHandler from '../../functions/runImageHandler'
import HeaderTitle from '../atoms/headerTitle/HeaderTitle'

const { height: ScreenHeight } = Dimensions.get('window')

export default function RunningPage(props: any) {
    const [timeId, setTimeId] = useState(0)
    const [isRunning, setIsrunning] = useState(false)
    const [motion, setMotion] = useState(true)

    useEffect(() => {
        props.navigation.setParams({ isRun: isRunning })
        if (isRunning) {
            const time = setInterval(() => {
                setMotion(prev => !prev)
            }, 500)
            setTimeId(time)
        } else {
            clearInterval(timeId)
        }
    }, [isRunning, setMotion])

    return (
        <Wrapper>
            <Background
                source={
                    ScreenHeight > 640
                        ? require('../../assets/backgroundImg/runBackground.png')
                        : require('../../assets/backgroundImg/mainBackgroundSmall.png')
                }
            >
                <Content>
                    {runImageHandler(motion)}
                    <RunBottom
                        navigation={props.navigation}
                        isRun={(isRun: boolean) => {
                            setIsrunning(isRun)
                        }}
                    />
                </Content>
            </Background>
        </Wrapper>
    )
}

RunningPage.navigationOptions = (navData: any) => {
    const isRunning = navData.navigation.getParam('isRun')

    return {
        headerTitle: <HeaderTitle title="RUNNING" />,
        headerLeft: () => (
            <IconButton
                onPress={() => {
                    if (!isRunning) {
                        navData.navigation.goBack()
                    } else {
                        Alert.alert('경고', '운동을 멈춘 후에 뒤로 가주세요!', [
                            { text: 'Okay' },
                        ])
                    }
                }}
            >
                <LeftArrow width={18} height={18} fill="black" />
            </IconButton>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="notice"
                    iconName="md-notifications"
                    onPress={() => {
                        Alert.alert('알림', '아직 구현하지 않았습니다.', [
                            { text: 'Okay' },
                        ])
                    }}
                />
                <Item
                    title="friends"
                    iconName="md-people"
                    onPress={() => {
                        navData.navigation.navigate('Friends')
                    }}
                />
            </HeaderButtons>
        ),
    }
}

const Wrapper = styled.View({
    flex: 1,
})

const Background = styled.ImageBackground({
    flex: 1,
})

const Content = styled.View({
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
})
