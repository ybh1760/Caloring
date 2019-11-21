import React from 'react'
import { Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import StatusBar from '../../molecules/gauge/StatusBar'
import Colors from '../../../constants/Colors'
import DrawerActions from '../../molecules/button/DrawerActions'
import gaugeTrack from '../../../functions/gaugeTrack'
import Text from '../../atoms/text/Text'
import FontSize from '../../../constants/FontSize'
import Rem from '../../../constants/Rem'

const { width, height } = Dimensions.get('window')

export default function UserInfo(props: any) {
    const userData = useSelector((state: any) => state.userData.userData)

    return (
        <Wrapper style={props.style}>
            <UserInfoDetail>
                <Charactor
                    source={require('../../../assets/drawerImg/drawer.png')}
                />
                <UserInfoContent>
                    <Text
                        color="white"
                        size={FontSize(3)}
                        style={{
                            marginBottom: Rem() * 0.5,
                        }}
                    >
                        {userData.name} 님
                    </Text>
                    <Text
                        color="white"
                        size={FontSize(2)}
                        style={{ marginBottom: Rem() * 0.6 }}
                    >
                        Level 10
                    </Text>
                    <StatusBar
                        color={Colors.fatGauge}
                        gauge={gaugeTrack(userData.fat)}
                        status="fat"
                    />
                </UserInfoContent>
            </UserInfoDetail>
            <DrawerActions
                font="regular"
                content="프로필"
                color="white"
                onPress={() => {
                    props.navigation.navigate('Main')
                }}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View({
    backgroundColor: Colors.drawerBlue,
})

const UserInfoDetail = styled.View({
    marginTop: height * 0.05,
    marginBottom: height * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
})

const UserInfoContent = styled.View({
    width: width * 0.5,
    marginHorizontal: width * 0.05,
})

const Charactor = styled.Image({
    width: 56,
    height: 77,
})
