import React from 'react'
import { Alert, Dimensions, ImageBackground } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import HeaderTitle from '../atoms/headerTitle/HeaderTitle'
import HeaderButton from '../molecules/button/HeaderButton'
import Character from '../atoms/Character/Character'
import Bottom from '../organisms/main/MainBottom'
import Message from '../molecules/message/Message'
import Background from '../atoms/ImageBackground/Background'

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('window')

export default function MainPage(props: any) {
    const userData = useSelector((state: any) => state.userData.userData)
    const fat = Math.floor(Math.random() * 5 + 1)
    return (
        <Wrapper>
            <Background
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}
                fat={fat}
            >
                {/* <Message /> */}
                <Character fat={fat} />
                <Bottom navigation={props.navigation} />
            </Background>
        </Wrapper>
    )
}

MainPage.navigationOptions = (navData: any) => {
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
