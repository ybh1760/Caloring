import React from 'react'
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import styled from 'styled-components/native'

import Rem from '../../../../constants/Rem'

interface IconCircleButtomProps {
    style?: object
    onPress: any
    color?: string
    children?: any
}

export default function IconCircle(props: IconCircleButtomProps) {
    return (
        <ButtonContainer style={props.style}>
            <TouchableNativeFeedback onPress={props.onPress}>
                <Circle color={props.color}>{props.children}</Circle>
            </TouchableNativeFeedback>
        </ButtonContainer>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: Rem() * 5,
        height: Rem() * 5,
        borderRadius: Rem() * 2.5,
    },
})

const ButtonContainer = styled.View({
    ...styles.circle,
    elevation: 5,
    overflow: 'hidden',
})

const Circle = styled.View((props: { color?: string }) => ({
    ...styles.circle,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: props.color,
}))
