import React from 'react'
import { StatusBar, Dimensions } from 'react-native'
import styled from 'styled-components/native'

import UserInfo from '../organisms/drawer/UserInfo'
import UserItem from '../organisms/drawer/UserItem'
import UserData from '../organisms/drawer/UserData'

const { height } = Dimensions.get('window')

export default props => {
    return (
        <Wrapper>
            <UserInfo navigation={props.navigation} />
            <UserItem navigation={props.navigation} />
            <Line />
            <UserData navigation={props.navigation} />
        </Wrapper>
    )
}

const Wrapper = styled.View({
    height: height,
    paddingTop: StatusBar.currentHeight,
})

const Line = styled.View({
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
})
