import React from 'react'
import styled from 'styled-components/native'

import Text from '../../atoms/text/Text'
import Rem from '../../../constants/Rem'
import FontSize from '../../../constants/FontSize'

interface NickContainerProps {
    nick: string
}

export default function NickContainer(props: NickContainerProps) {
    return (
        <NickBox>
            <Text size={FontSize(1)} color="black">
                밍구
            </Text>
        </NickBox>
    )
}

const NickBox = styled.View({
    backgroundColor: 'white',
    width: Rem() * 11.14,
    borderRadius: Rem() * 3,
    marginBottom: Rem() * 1.4,
    paddingHorizontal: Rem() * 2,
    paddingVertical: Rem() / 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
})
