import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    Alert,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../molecules/button/HeaderButton'
import RunBottom from '../organisms/Running/RunBottom'
import IconButton from '../molecules/button/icon/Icon'
import LeftArrow from '../atoms/button/LeftArrow'
import runImageHandler from '../../functions/runImageHandler'
import HeaderTitle from '../atoms/headerTitle/HeaderTitle'

const { width, height: ScreenHeight } = Dimensions.get('window')

export default function RunningPage(props) {
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
        <View style={styles.screen}>
            <ImageBackground
                style={styles.imageBackground}
                source={
                    (src =
                        ScreenHeight > 640
                            ? require('../../assets/backgroundImg/runBackground.png')
                            : require('../../assets/backgroundImg/mainBackgroundSmall.png'))
                }
            >
                <View style={styles.content}>
                    {runImageHandler(motion)}

                    <RunBottom
                        navigation={props.navigation}
                        isRun={isRun => {
                            setIsrunning(isRun)
                        }}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

RunningPage.navigationOptions = navData => {
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

const styles = StyleSheet.create({
    screen: { flex: 1 },
    imageBackground: { flex: 1 },
    content: {
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
})

//410x780
