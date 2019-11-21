import React from 'react'
import { View, StyleSheet } from 'react-native'

import AttackTextButton from '../button/roundEdge/AttackButton'
import Attack from '../button/circle/Attack'
import Rem from '../../../constants/Rem'

interface AttackContainerProps {
    height: number
    children?: any
    onPress?: any
}

export default function AttackContainer(props: AttackContainerProps) {
    return (
        <View
            style={{
                ...styles.attackContainer,
                bottom: props.height - Rem() * 3,
            }}
        >
            <Attack
                onPress={props.onPress}
                children={props.children}
                dim={Rem() * 4.4}
            />
            <AttackTextButton onPress={props.onPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    attackContainer: {
        position: 'absolute',
        right: 20,
        width: Rem() * 5.5,
        height: Rem() * 5.5,
        borderTopRightRadius: (Rem() * 5.5) / 2,
        borderTopLeftRadius: (Rem() * 5.5) / 2,
        backgroundColor: 'white',
        zIndex: 1,
        padding: (Rem() * 1.1) / 2,
    },
})
