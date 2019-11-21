import React from 'react'
import { View, StyleSheet } from 'react-native'

interface AttackContainerProps {
    height: number
    children?: any
}

export default function AttackContainer(props: AttackContainerProps) {
    return (
        <View style={{ ...styles.attackContainer, bottom: props.height - 40 }}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    attackContainer: {
        position: 'absolute',
        right: 20,
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'white',
        zIndex: 1,
        padding: 8,
    },
})
