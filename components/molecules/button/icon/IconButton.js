import React from 'react'
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Colors from '../../../../constants/Colors'

export default props => {
    return (
        <View style={{ ...styles.buttonContainer, ...props.style }}>
            <TouchableNativeFeedback onPress={props.onPress}>
                <View
                    style={{ ...styles.circle, backgroundColor: props.color }}
                >
                    <Ionicons
                        name={props.name}
                        size={props.name === 'md-arrow-dropright' ? 50 : 30}
                        color="white"
                    />
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
