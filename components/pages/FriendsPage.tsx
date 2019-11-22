import React from 'react'
import { View, Text, Alert } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import styled from 'styled-components/native'

import HeaderButton from '../molecules/button/HeaderButton'
import FriendCard from '../molecules/friends/FriendCard'
import Colors from '../../constants/Colors'
import HeaderTitle from '../atoms/headerTitle/HeaderTitle'
import Rem from '../../constants/Rem'

export default function FriendsPage(props: any) {
    return (
        <Wrapper>
            <FriendCard />
        </Wrapper>
    )
}

FriendsPage.navigationOptions = (navData: any) => {
    return {
        headerTitle: <HeaderTitle title="FRIENDS" />,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="friends"
                    iconName="md-person-add"
                    onPress={() => {
                        Alert.alert('친구 추가', '아직 안 만들었습니다 ㅎㅎ', [
                            { text: '확인' },
                        ])
                    }}
                />
            </HeaderButtons>
        ),
    }
}

const Wrapper = styled.View({
    flex: 1,
    paddingTop: Rem(),
    backgroundColor: Colors.friendsBackground,
})
