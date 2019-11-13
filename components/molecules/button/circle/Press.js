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

export default props => {
    let TouchableCmp = TouchableOpacity

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

const ButtonContainer = styled.View({
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
})

const Circle = styled.View({
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.yellow,
})
