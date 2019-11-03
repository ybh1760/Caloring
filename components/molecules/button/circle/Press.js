import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Colors from '../../../../constants/Colors'

export default props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...styles.circle, ...props.style }}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.yellow,
    },
})
