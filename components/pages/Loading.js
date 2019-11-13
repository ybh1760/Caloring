import React, { useEffect } from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

import Text from '../atoms/text/Text'
import Colors from '../../constants/Colors'

const { width, height } = Dimensions.get('window')

export default props => {
    const func = async () => {
        await props.startAsync()
        props.onFinished()
    }
    useEffect(() => {
        func()
    }, [])

    return (
        <Wrapper>
            <CharacterContainer>
                <Character
                    source={
                        (src = require('../../assets/drawerImg/drawer.png'))
                    }
                />
                <Text
                    align="center"
                    size={18}
                    color="white"
                    style={{
                        marginTop: 15,
                    }}
                >
                    Loading...
                </Text>
            </CharacterContainer>
            <BottomBackground
                source={
                    (src = require('../../assets/backgroundImg/loadBottom.png'))
                }
            />
        </Wrapper>
    )
}

const Wrapper = styled.View({
    flex: 1,
    backgroundColor: Colors.drawerBlue,
    justifyContent: 'flex-end',
    alignItems: 'center',
})

const CharacterContainer = styled.View({
    marginBottom: height * 0.13,
})

const Character = styled.Image({
    width: width * 0.25,
    height: height * 0.18,
})

const BottomBackground = styled.Image({
    width: width,
    height: height * 0.4,
})
