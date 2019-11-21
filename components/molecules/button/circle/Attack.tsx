import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import Colors from '../../../../constants/Colors'
import Rem from '../../../../constants/Rem'

interface AttackButtonProps {
    onPress: any
    style?: object
    children?: object
    dim: number
}

export default function Attack(props: AttackButtonProps) {
    return (
        <TouchableOpacity
            onPress={() => {
                props.onPress()
            }}
        >
            <Circle style={props.style} dim={props.dim}>
                {props.children}
            </Circle>
        </TouchableOpacity>
    )
}

const Circle = styled.View((props: { dim: number }) => ({
    width: props.dim,
    height: props.dim,
    borderRadius: props.dim / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.attackRed,
}))
