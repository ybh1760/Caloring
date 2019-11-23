import React from 'react'
import { Dimensions, StatusBar } from 'react-native'
import styled from 'styled-components/native'

import MainResult from '../organisms/result/MainResult'

const { width: ScreenWidth } = Dimensions.get('window')

export default function ResultPage(props: any) {
    return (
        <Wrapper>
            <Background
                source={require('../../assets/backgroundImg/runBackground.png')}
            >
                <MainResult navigation={props.navigation} />
            </Background>
        </Wrapper>
    )
}

ResultPage.navigationOptions = {
    headerShown: false,
}

const Wrapper = styled.View({
    flex: 1,
    marginTop: StatusBar.currentHeight,
})

const Background = styled.ImageBackground({
    width: ScreenWidth,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
})
