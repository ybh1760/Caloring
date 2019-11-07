import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../../../constants/Colors'

export default props => {
    return (
        <TouchableOpacity
            onPress={() => {
                props.onPress()
            }}
        >
            <View style={{ ...styles.circle, ...props.style }}>
                {props.children}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.attackRed,
    },
})
