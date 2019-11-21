import React from 'react'
import { View, StyleSheet } from 'react-native'

import Rem from '../../../constants/Rem'

interface AttackContainerProps {
    height: number
    children?: any
}

export default function AttackContainer(props: AttackContainerProps) {
    return (
        <View
            style={{
                ...styles.attackContainer,
                bottom: props.height - Rem() * 3,
            }}
        >
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    attackContainer: {
        position: 'absolute',
        right: 20,
        width: Rem() * 6,
        height: Rem() * 6,
        borderRadius: Rem() * 3,
        backgroundColor: 'white',
        zIndex: 1,
        padding: Rem() * 0.75,
    },
})
