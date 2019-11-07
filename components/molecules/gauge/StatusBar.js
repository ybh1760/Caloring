import React from 'react'
import { View, StyleSheet } from 'react-native'

import Colors from '../../../constants/Colors'

export default props => {
    const num = parseInt(props.gauge)
    const widthHandler = () => {
        if (num === 0) {
            return '0%'
        } else if (num < 33) {
            return '33.33%'
        } else if (num < 66) {
            return '66.66%'
        } else {
            return '100%'
        }
    }
    return (
        <View style={styles.background}>
            <View
                style={{
                    ...styles.content,
                    backgroundColor: props.color,
                    width:
                        props.status === 'fat' ? props.gauge : widthHandler(),
                }}
            ></View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 20,
        borderRadius: 10,
        backgroundColor: Colors.barStatus,
        padding: 4,
    },
    content: {
        width: '33.33%',
        height: 12,
        borderRadius: 10,
    },
})
