import React, { useEffect } from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

import Text from '../atoms/text/Text'
import Colors from '../../constants/Colors'
import FontSize from '../../constants/FontSize'

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('window')

export default function LoadingPage(props: any) {
    const func = async () => {
        await props.startAsync()
        props.onFinished()
    }
    useEffect(() => {
        func()
    }, [])

    return (
        <Wrapper>
            <Character source={require('../../assets/drawerImg/drawer.png')} />
            <Text
                align="center"
                size={FontSize(1)}
                color="yellow"
                style={{
                    marginTop: 15,
                }}
            >
                Loading...
            </Text>

            <BottomBackground
                source={require('../../assets/backgroundImg/loadBottom.png')}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View({
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.drawerBlue,
})

const Character = styled.Image({
    width: 56,
    height: 77,
})

const BottomBackground = styled.Image({
    width: ScreenWidth,
    height: ScreenHeight * 0.4,
})
