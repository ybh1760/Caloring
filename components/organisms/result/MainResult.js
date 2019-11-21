import React from 'react'
import { View, StyleSheet, Dimensions, Image, PixelRatio } from 'react-native'
import { useSelector } from 'react-redux'

import DisplayDatas from '../DisplayDatas'
import StatusBar from '../../molecules/gauge/StatusBar'
import Colors from '../../../constants/Colors'
import Round from '../../atoms/roundEdge/Round'
import Text from '../../atoms/text/Text'
import DataGraph from '../../molecules/graph/DataGraph'
import FontSize from '../../../constants/FontSize'

const { width, height: ScreenHeight } = Dimensions.get('window')

export default function MainResult(props) {
    const savedTimeStamp = useSelector(state => state.time.timeStamp)
    const timeIndex = savedTimeStamp.length - 2

    const savedDistance = useSelector(state => state.distance.distance)
    const disIndex = savedDistance.length - 2

    return (
        <View style={styles.resultContainer}>
            <Image
                source={(src = require('../../../assets/drawerImg/drawer.png'))}
                style={{ marginTop: ScreenHeight * 0.04 }}
            />
            <DisplayDatas
                containerStyle={{
                    width: '85%',
                    marginTop: ScreenHeight * 0.04,
                }}
                layorSize={FontSize(1)}
                dataSize={FontSize(5)}
                meter={savedDistance[disIndex]}
                sec={savedTimeStamp[timeIndex].sec}
            />
            <View style={{ width: '100%', marginTop: ScreenHeight * 0.03 }}>
                <Text size={FontSize(1)} align="center">
                    칼로링포인트
                </Text>
                <Text size={FontSize(5)} align="center">
                    100
                </Text>
                <View
                    style={{
                        paddingHorizontal: width * 0.05,
                        marginTop: ScreenHeight * 0.01,
                    }}
                >
                    <StatusBar
                        status="caloring"
                        color={Colors.calGauge}
                        gauge="60"
                    />
                </View>
                <View
                    style={{
                        width: '80%',
                        marginVertical: ScreenHeight * 0.02,
                        alignSelf: 'center',
                    }}
                >
                    <Text size={FontSize(1)}>
                        오늘 km 목표를 달성하셨습니다.
                    </Text>
                </View>
                <View style={{ alignItems: 'center', width: '100%' }}>
                    <DataGraph width={300} />
                </View>
                <Round
                    content="메인화면"
                    onPress={() => {
                        props.navigation.popToTop()
                    }}
                    font="black"
                    style={{
                        width: width * 0.4,
                        backgroundColor: Colors.yellow,
                        paddingVertical: 15,
                        alignSelf: 'center',
                        elevation: 3,
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    resultContainer: {
        width: '95%',
        height: '95%',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 2,
        alignItems: 'center',
    },
})
