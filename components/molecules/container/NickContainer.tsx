import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

import Text from '../../atoms/text/Text'
import Rem from '../../../constants/Rem'
import FontSize from '../../../constants/FontSize'

const { width } = Dimensions.get('window')

interface NickContainerProps {
    nick: string
}

export default function NickContainer(props: NickContainerProps) {
    return (
        <NickBox>
            <Text size={FontSize(1)}>양병훈</Text>
        </NickBox>
    )
}

const NickBox = styled.View({
    backgroundColor: 'white',
    borderRadius: Rem(),
    marginBottom: Rem(),
    paddingHorizontal: Rem() * 2,
    paddingVertical: Rem() / 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
})
