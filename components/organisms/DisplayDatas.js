import React from 'react'
import { View, StyleSheet } from 'react-native'

import meterCheck from '../atoms/displayMeter/Meters'
import { minTimer, secTimer } from '../atoms/timer/Timer'
import Text from '../atoms/text/Text'
import Colors from '../../constants/Colors'

export default props => {
    const { meter, sec } = props

    return (
        <View style={{ ...styles.runDataContainer, ...props.containerStyle }}>
            <View style={styles.row}>
                <View style={{ width: '50%' }}>
                    <Text
                        size={props.layorSize}
                        font="medium"
                        color={Colors.grey}
                        align="center"
                    >
                        DISTANCE
                    </Text>
                </View>
                <View style={{ width: '50%' }}>
                    <Text
                        size={props.layorSize}
                        font="medium"
                        color={Colors.grey}
                        align="center"
                    >
                        TIME
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={{ width: '50%' }}>
                    <Text
                        size={props.dataSize}
                        font="regular"
                        color={Colors.grey}
                        align="center"
                    >
                        {meterCheck(meter)}
                    </Text>
                </View>
                <View style={{ width: '50%' }}>
                    <Text
                        size={props.dataSize}
                        font="regular"
                        color={Colors.grey}
                        align="center"
                    >
                        {minTimer(sec)}
                        {secTimer(sec)}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    runDataContainer: {
        width: '100%',
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
