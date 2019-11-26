import React from 'react'
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native'
import styled from 'styled-components/native'

import Rem from '../../../../constants/Rem'
import LinearCircle from '../../../atoms/gradient/LinearCircle'

const { height: ScreenHeight } = Dimensions.get('window')

export default function LinGradient(props: any) {
    let TouchableCmp: any = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 23) {
        TouchableCmp = TouchableNativeFeedback
    }
    console.log(props.dim)
    return (
        <Wrapper style={props.style} dim={props.dim}>
            <TouchableCmp onPress={props.onPress}>
                <LinearCircle
                    dim={props.dim}
                    colors={props.colors}
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    {props.children}
                </LinearCircle>
            </TouchableCmp>
        </Wrapper>
    )
}

const styles = (props: any) => {
    return StyleSheet.create({
        circle: {
            width: ScreenHeight > 640 ? props : Rem() * 5,
            height: ScreenHeight > 640 ? props : Rem() * 5,
            borderRadius: ScreenHeight > 640 ? props / 2 : Rem() * 2.5,
        },
    })
}
const Wrapper = styled.View<{ dim: number }>((props: any) => {
    return {
        ...styles(props.dim).circle,
        overflow: 'hidden',
    }
})
