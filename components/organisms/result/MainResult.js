import React from 'react'
import { View, StyleSheet, Dimensions, Image, PixelRatio } from 'react-native'
import { useSelector } from 'react-redux'

import DisplayDatas from '../DisplayDatas'
import StatusBar from '../../molecules/gauge/StatusBar'
import Colors from '../../../constants/Colors'
import Round from '../../atoms/roundEdge/Round'
import Text from '../../atoms/text/Text'
import DataGraph from '../../molecules/graph/DataGraph'
import Graph from '../../molecules/graph/Graph'

const { width, height } = Dimensions.get('window')

export default function MainResult(props) {
    const savedTimeStamp = useSelector(state => state.time.timeStamp)
    const timeIndex = savedTimeStamp.length - 2

    const savedDistance = useSelector(state => state.distance.distance)
    const disIndex = savedDistance.length - 2

    return (
        <View style={styles.resultContainer}>
            <Image
                source={(src = require('../../../assets/drawerImg/drawer.png'))}
                style={{ marginTop: height * 0.04 }}
            />
            <DisplayDatas
                containerStyle={{
                    width: '85%',
                    marginTop: height * 0.04,
                }}
                layorSize={15}
                dataSize={45}
                meter={savedDistance[disIndex]}
                sec={savedTimeStamp[timeIndex].sec}
            />
            <View style={{ width: '100%', marginTop: height * 0.03 }}>
                <Text
                    size={15}
                    font="regular"
                    color={Colors.grey}
                    align="center"
                >
                    칼로링포인트
                </Text>
                <Text
                    size={45}
                    font="regular"
                    color={Colors.grey}
                    align="center"
                >
                    100
                </Text>
                <View
                    style={{
                        paddingHorizontal: width * 0.05,
                        marginTop: height * 0.01,
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
                        marginVertical: height * 0.02,
                        alignSelf: 'center',
                    }}
                >
                    <Text size={15} font="regular" color={Colors.grey}>
                        오늘 km 목표를 달성하셨습니다.
                    </Text>
                </View>
                {/* <View style={{ alignItems: 'center', width: '100%' }}> */}
                {/* <DataGraph width={300} /> */}
                <Graph />
                {/* </View> */}
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
        width: width * 0.95,
        height: height * 0.98,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 2,
        alignItems: 'center',
    },
})
