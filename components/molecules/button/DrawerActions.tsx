import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import styled from 'styled-components/native'

import IconButton from './icon/Icon'
import Right from '../../atoms/button/DrawerRight'
import Round from '../../atoms/roundEdge/Round'
import Rem from '../../../constants/Rem'
import FontSize from '../../../constants/FontSize'

const { width: ScreenWidth } = Dimensions.get('window')

interface DrawerActionsProps {
    style?: object
    font?: string
    content?: string
    color?: string
    textColor?: string
    onPress?: any
}

export default function DrawerActions(props: DrawerActionsProps) {
    const { font, content, color, textColor, onPress } = props

    return (
        <ActionContainer>
            <Round
                font={font}
                content={content}
                style={{
                    backgroundColor: color,
                    width: ScreenWidth * 0.2,
                    paddingVertical: 2,
                }}
                color={textColor}
                onPress={onPress}
            />
            <IconButton onPress={onPress}>
                <Right width={FontSize(2)} height={FontSize(2)} fill={color} />
            </IconButton>
        </ActionContainer>
    )
}

const ActionContainer = styled.View({
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: ScreenWidth * 0.05,
})
