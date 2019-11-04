import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={{ ...props.style, ...styles.round }}>
            <Text style={{ color: props.color }}>{props.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    round: {
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
