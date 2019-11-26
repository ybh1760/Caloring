import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

import LinearCircle from '../../../atoms/gradient/LinearCircle'
import Colors from '../../../../constants/Colors'
import Rem from '../../../../constants/Rem'

interface AttackButtonProps {
    onPress: any
    style?: object
    children?: object
    dim: number
    colors: any
}

export default function Attack(props: AttackButtonProps) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <LinearCircle
                colors={props.colors}
                dim={props.dim}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 5,
                }}
            >
                {props.children}
            </LinearCircle>
        </TouchableOpacity>
    )
}
