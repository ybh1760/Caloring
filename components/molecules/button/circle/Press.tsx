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
import FontSize from '../../../../constants/FontSize'

interface PressButtonProps {
    style?: object
    onPress: any
    title: string
}

const { height: ScreenHeight } = Dimensions.get('window')

export default function Press(props: PressButtonProps) {
    let TouchableCmp: any = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 23) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <ButtonContainer style={props.style}>
            <TouchableCmp onPress={props.onPress}>
                <Circle>
                    <Text size={FontSize(2)} font="black">
                        {props.title}
                    </Text>
                </Circle>
            </TouchableCmp>
        </ButtonContainer>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: ScreenHeight > 640 ? Rem() * 5 : Rem() * 4,
        height: ScreenHeight > 640 ? Rem() * 5 : Rem() * 4,
        borderRadius: ScreenHeight > 640 ? Rem() * 2.5 : Rem() * 2,
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
