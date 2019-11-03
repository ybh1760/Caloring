import React from 'react'
import { View, StyleSheet } from 'react-native'

import Colors from '../../../constants/Colors'

export default props => {
    return (
        <View style={styles.background}>
            <View
                style={{ ...styles.content, backgroundColor: props.color }}
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
        padding: 2,
    },
    content: {
        width: '33.33%',
        height: 16,
        borderRadius: 10,
    },
})
