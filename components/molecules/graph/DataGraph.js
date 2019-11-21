import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import Colors from '../../../constants/Colors'

import Crown from '../../atoms/Icon/Crown'

const { height: ScreenHeight } = Dimensions.get('window')

const ChartConfig = {
    backgroundColor: 'white',
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    decimalPlaces: 0,
    color: (opacity = 0) => `rgba(0, 0, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
        borderRadius: 16,
    },
    propsForDots: {
        r: '5',
        strokeWidth: '2',
        stroke: 'white',
    },
}

export default props => {
    const { width, height } = props
    return (
        <LineChart
            data={{
                labels: ['11.12', '11.13', '11.14', '11.15'],
                datasets: [
                    {
                        data: [10, 21, 100, 60],
                    },
                ],
            }}
            width={width} // from react-native
            height={ScreenHeight >= 640 ? 220 : 100}
            withInnerLines
            yLabelsOffset={33}
            decorator={value => {
                const index = value.data[0].data.findIndex(data => data === 100)
                const left = 50 + 60 * index
                return (
                    <View
                        style={{
                            position: 'absolute',
                            top: -13,
                            left: left,
                            backgroundColor: 'white',
                        }}
                    >
                        <Crown width={20} height={20} />
                    </View>
                )
            }}
            getDotColor={(dataPoint, dataPointIndex) => {
                if (dataPoint === 100) return 'red'
                else return Colors.drawerBlue
            }}
            yAxisSuffix={'%'}
            chartConfig={ChartConfig}
            style={{
                borderColor: Colors.drawerBlue,
                paddingTop: 15,
                borderRadius: 16,
                borderWidth: 1,
                marginVertical: 8,
            }}
        />
    )
}
