import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

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
        <TouchableOpacity
            onPress={() => {
                props.onPress()
            }}
        >
            <LinearGradient
                colors={props.colors}
                style={{
                    width: Math.floor(props.dim),
                    height: Math.floor(props.dim),
                    borderRadius: Math.floor(props.dim) / 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 5,
                }}
            >
                {props.children}
            </LinearGradient>
        </TouchableOpacity>
    )
}
