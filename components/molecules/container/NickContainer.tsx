import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

import Text from '../../atoms/text/Text'

const { width } = Dimensions.get('window')

interface NickContainerProps {
    nick: string
}

export default function NickContainer(props: NickContainerProps) {
    return (
        <NickBox>
            <Text>{props.nick}</Text>
        </NickBox>
    )
}

const NickBox = styled.View({
    width: width * 0.2,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
})
