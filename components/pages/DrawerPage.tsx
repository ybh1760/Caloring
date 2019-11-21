import React from 'react'
import { StatusBar, Dimensions } from 'react-native'
import styled from 'styled-components/native'

import UserInfo from '../organisms/drawer/UserInfo'
import UserItem from '../organisms/drawer/UserItem'
import UserData from '../organisms/drawer/UserData'

const { height: ScreenHeight } = Dimensions.get('window')

export default function DrawerPage(props: any) {
    return (
        <Screen>
            <Wrapper>
                <UserInfo
                    navigation={props.navigation}
                    style={{ height: ScreenHeight > 640 ? '25%' : '28%' }}
                />
                <UserItem
                    navigation={props.navigation}
                    style={{ height: ScreenHeight > 640 ? '25%' : '28%' }}
                />
                <Line />
                <UserData navigation={props.navigation} />
            </Wrapper>
        </Screen>
    )
}

const Screen = styled.View({
    height: ScreenHeight,
    marginTop: StatusBar.currentHeight,
})

const Wrapper = styled.View({
    height: '100%',
})

const Line = styled.View({
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
})
