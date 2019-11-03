import React from 'react'
import { View, Text, Alert } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../molecules/button/HeaderButton'

export default function FriendsPage(props) {
    return (
        <View>
            <Text>FriendsList</Text>
        </View>
    )
}

FriendsPage.navigationOptions = navData => {
    return {
        headerTitle: '친구 목록',
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
