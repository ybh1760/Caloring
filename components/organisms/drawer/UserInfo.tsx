import React from 'react'
import { Dimensions, Image } from 'react-native'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import StatusBar from '../../molecules/gauge/StatusBar'
import Colors from '../../../constants/Colors'
import DrawerActions from '../../molecules/button/DrawerActions'
import gaugeTrack from '../../../functions/gaugeTrack'
import Text from '../../atoms/text/Text'

const { width, height } = Dimensions.get('window')

export default function UserInfo(props: any) {
    const userData = useSelector((state: any) => state.userData.userData)

    return (
        <Wrapper>
            <UserInfoDetail>
                <Charactor
                    source={require('../../../assets/drawerImg/drawer.png')}
                />
                <UserInfoContent>
                    <Text
                        font="regular"
                        color="white"
                        size={18}
                        style={{
                            marginBottom: 8,
                        }}
                    >
                        {userData.name} 님
                    </Text>
                    <Text
                        font="regular"
                        color="white"
                        size={18}
                        style={{ marginBottom: 5 }}
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
    height: height * 0.25,
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
    width: 60,
    height: 80,
})
