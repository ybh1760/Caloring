import React from 'react'
import { LineChart, XAxis, Grid, YAxis } from 'react-native-svg-charts'
import { View } from 'react-native'

export default props => {
    const data = [100, 30, 24, 65, 35, 13]

    return (
        <View style={{ height: 200, padding: 20 }}>
            <YAxis
                data={data}
                contentInset={contentInset}
                svg={{
                    fill: 'grey',
                    fontSize: 10,
                }}
                numberOfTicks={10}
                formatLabel={value => `${value}ºC`}
            />
            <LineChart
                style={{ flex: 1 }}
                data={data}
                gridMin={0}
                contentInset={{ top: 10, bottom: 10 }}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
            >
                <Grid />
            </LineChart>
            <XAxis
                style={{ marginHorizontal: -10 }}
                data={data}
                formatLabel={(value, index) => index}
                contentInset={{ left: 10, right: 10 }}
                svg={{ fontSize: 10, fill: 'black' }}
            />
        </View>
    )
}
