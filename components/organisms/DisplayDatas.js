import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import meterCheck from '../atoms/displayMeter/Meters'
import { minTimer, secTimer } from '../atoms/timer/Timer'
import RegularText from '../atoms/text/regular/Text'
import MediumText from '../atoms/text/medium/Text'

export default props => {
    const { meter, sec } = props

    return (
        <View style={{ ...styles.runDataContainer, ...props.containerStyle }}>
            <View style={styles.row}>
                <View style={{ width: '50%' }}>
                    <MediumText
                        style={{
                            textAlign: 'center',
                            fontSize: props.layorSize,
                        }}
                    >
                        DISTANCE
                    </MediumText>
                </View>
                <View style={{ width: '50%' }}>
                    <MediumText
                        style={{
                            textAlign: 'center',
                            fontSize: props.layorSize,
                        }}
                    >
                        TIME
                    </MediumText>
                </View>
            </View>
            <View style={styles.row}>
                <View style={{ width: '50%' }}>
                    <RegularText
                        style={{
                            textAlign: 'center',
                            fontSize: props.dataSize,
                        }}
                    >
                        {meterCheck(meter)}
                    </RegularText>
                </View>
                <View style={{ width: '50%' }}>
                    <RegularText
                        style={{
                            textAlign: 'center',
                            fontSize: props.dataSize,
                        }}
                    >
                        {minTimer(sec)}
                        {secTimer(sec)}
                    </RegularText>
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

    timer: {
        margin: 15,
    },
    displayData: {
        fontSize: 30,
    },
})
