import React from 'react'
import { View, StyleSheet, ProgressBarAndroidComponent } from 'react-native'

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
    const dim = Rem() * 8.2
    return (
        <View
            style={{
                ...styles({ dim }).attackContainer,
                bottom: props.height - dim / 2,
            }}
        >
            <Attack
                onPress={props.onPress}
                children={props.children}
                dim={Rem() * 6.4}
                colors={Colors.gradient.attack}
            />
            <AttackTextButton onPress={props.onPress} />
        </View>
    )
}

const styles = (props: { dim: number }) =>
    StyleSheet.create({
        attackContainer: {
            position: 'absolute',
            right: Rem() * 1.8,
            width: props.dim,
            height: props.dim,
            borderTopRightRadius: props.dim / 2,
            borderTopLeftRadius: props.dim / 2,
            backgroundColor: 'white',
            zIndex: 1,
            padding: Rem() * 0.9,
        },
    })
