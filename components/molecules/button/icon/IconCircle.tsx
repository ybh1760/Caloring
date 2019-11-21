import React from 'react'
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native'

interface IconCircleButtomProps {
    style?: object
    onPress: any
    color?: string
    children?: any
}

export default function IconCircle(props: IconCircleButtomProps) {
    return (
        <View style={{ ...styles.buttonContainer, ...props.style }}>
            <TouchableNativeFeedback onPress={props.onPress}>
                <View
                    style={{ ...styles.circle, backgroundColor: props.color }}
                >
                    {props.children}
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
        elevation: 5,
        overflow: 'hidden',
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
