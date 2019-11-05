import React from 'react'
import { View, StyleSheet, TouchableNativeFeedback, Text } from 'react-native'
import Colors from '../../../../constants/Colors'

export default props => {
    return (
        <View style={{ ...styles.buttonContainer, ...props.style }}>
            <TouchableNativeFeedback onPress={props.onPress}>
                <View style={styles.circle}>
                    <Text>{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        overflow: 'hidden',
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.yellow,
    },
})
