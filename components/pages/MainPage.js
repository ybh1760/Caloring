import React from 'react'
import { Alert } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import HeaderTitle from '../atoms/headerTitle/HeaderTitle'
import HeaderButton from '../molecules/button/HeaderButton'
import imageHandler from '../../functions/imageHandler'
import Bottom from '../organisms/main/MainBottom'
import Message from '../molecules/message/Message'

export default function MainPage(props) {
    const userData = useSelector(state => state.userData.userData)

    return (
        <Wrapper>
            <Background
                source={
                    (src = require('../../assets/backgroundImg/mainBackground.png'))
                }
            >
                <Message
                    style={{
                        marginBottom: 60,
                    }}
                />

                {imageHandler(userData.fat)}
                <Bottom navigation={props.navigation} />
            </Background>
        </Wrapper>
    )
}

MainPage.navigationOptions = navData => {
    return {
        headerTitle: <HeaderTitle title="MY ROOM" />,
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="menu"
                    iconName="md-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer()
                    }}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="notice"
                    iconName="md-notifications"
                    onPress={() => {
                        Alert.alert('알림', '아직 구현하지 않았습니다.', [
                            { text: 'Okay' },
                        ])
                    }}
                />
                <Item
                    title="friends"
                    iconName="md-people"
                    onPress={() => {
                        navData.navigation.navigate('Friends')
                    }}
                />
            </HeaderButtons>
        ),
    }
}
const Wrapper = styled.View({
    flex: 1,
})

const Background = styled.ImageBackground({
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
})
