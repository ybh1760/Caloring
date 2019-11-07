import React, { useState, useCallback, useEffect } from 'react'
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Modal,
    Dimensions,
} from 'react-native'
import RunBottom from '../organisms/Running/RunBottom'

const { width, height } = Dimensions.get('window')

export default function RunningPage(props) {
    const [timeId, setTimeId] = useState(0)
    const [isRunning, setIsrunning] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    const [motion, setMotion] = useState(true)

    useEffect(() => {
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
                    (src = require('../../assets/backgroundImg/runBackground.png'))
                }
            >
                <View style={styles.content}>
                    <View style={styles.imageContainer}>
                        {motion ? (
                            <Image
                                style={styles.image}
                                source={
                                    (src = require('../../assets/CharactorImg/runningMotion_1.png'))
                                }
                            />
                        ) : (
                            <Image
                                style={styles.image}
                                source={
                                    (src = require('../../assets/CharactorImg/runningMotion_2.png'))
                                }
                            />
                        )}
                    </View>
                    <RunBottom
                        navigation={props.navigation}
                        isRun={isRun => {
                            setIsrunning(isRun)
                        }}
                        isFin={isFin => {
                            setIsFinished(isFin)
                        }}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

RunningPage.navigationOptions = {
    headerTitle: '운동중',
}

const styles = StyleSheet.create({
    screen: { flex: 1 },
    imageBackground: { flex: 1 },
    content: {
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    imageContainer: { width: 120, height: 160 },
    image: { width: '100%', height: '100%' },
})

//410x780
