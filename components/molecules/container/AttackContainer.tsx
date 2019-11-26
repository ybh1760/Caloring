import React from 'react'
import { View, StyleSheet } from 'react-native'

import AttackTextButton from '../button/roundEdge/AttackButton'
import Attack from '../button/circle/Attack'
import Rem from '../../../constants/Rem'
import Colors from '../../../constants/Colors'

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
                dim={Rem() * 4.8}
                colors={Colors.gradient.attack}
            />
            <AttackTextButton onPress={props.onPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    attackContainer: {
        position: 'absolute',
        right: 20,
        width: Rem() * 6,
        height: Rem() * 6,
        borderTopRightRadius: Rem() * 3,
        borderTopLeftRadius: Rem() * 3,
        backgroundColor: 'white',
        zIndex: 1,
        padding: (Rem() * 1.2) / 2,
    },
})
