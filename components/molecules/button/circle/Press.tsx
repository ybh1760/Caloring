import React from 'react'
import {
    View,
    StyleSheet,
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform,
    Dimensions,
} from 'react-native'
import styled from 'styled-components/native'

import Colors from '../../../../constants/Colors'
import Text from '../../../atoms/text/Text'
import Rem from '../../../../constants/Rem'

interface PressButtonProps {
    style?: object
    onPress: any
    title: string
}

export default function Press(props: PressButtonProps) {
    let TouchableCmp: any = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 23) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <ButtonContainer style={props.style}>
            <TouchableCmp onPress={props.onPress}>
                <Circle>
                    <Text size={18} font="black">
                        {props.title}
                    </Text>
                </Circle>
            </TouchableCmp>
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
    overflow: 'hidden',
})

const Circle = styled.View({
    ...styles.circle,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.yellow,
})
