import React from 'react'
import { View, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

import Colors from '../../../constants/Colors'
import Rem from '../../../constants/Rem'

interface StatusBarProps {
    gauge: any
    color: string
    status: string
    gaugeStyle?: object
    style?: object
}

export default function StatusBar(props: StatusBarProps) {
    const num = parseInt(props.gauge)
    const widthHandler = () => {
        if (num === 0) {
            return '0%'
        } else if (num < 33) {
            return '33.33%'
        } else if (num < 66) {
            return '66.66%'
        } else {
            return '100%'
        }
    }
    return (
        <Background style={props.style}>
            <Content
                status={props.status}
                gauge={props.gauge}
                color={props.color}
                style={props.gaugeStyle}
            />
        </Background>
    )
}

const Background = styled.View({
    width: '100%',
    height: Rem(),
    borderRadius: Rem() * 0.5,
    backgroundColor: Colors.barStatus,
    padding: Rem() * 0.1,
})

const Content = styled.View(
    (props: { status: string; gauge: number; color: string }) => ({
        width: props.status === 'fat' ? props.gauge : '33.33%',
        height: Rem() * 0.8,
        borderRadius: Rem() * 0.4,
        backgroundColor: props.color,
    })
)
