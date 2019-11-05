import React from 'react'
import { View, StyleSheet } from 'react-native'

import Colors from '../../../constants/Colors'

export default props => {
    return (
        <View style={styles.background}>
            <View
                style={{
                    ...styles.content,
                    backgroundColor: props.color,
                    width: props.gauge,
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
