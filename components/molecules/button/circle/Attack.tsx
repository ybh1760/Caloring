import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '../../../../constants/Colors'
import Rem from '../../../../constants/Rem'

interface AttackButtonProps {
    onPress: any
    style?: object
    children?: object
}

export default function Attack(props: AttackButtonProps) {
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
        width: Rem() * 4.5,
        height: Rem() * 4.5,
        borderRadius: Rem() * 2.25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.attackRed,
    },
})
