import React from 'react'
import { Image, Dimensions, View } from 'react-native'
import styled from 'styled-components/native'

import Colors from '../../../constants/Colors'
import DrawerActions from '../../molecules/button/DrawerActions'
import Text from '../../atoms/text/Text'
import DataGraph from '../../molecules/graph/DataGraph'

const { width, height } = Dimensions.get('window')

interface UserDataProps {
    navigation: any
}

export default function UserData(props: UserDataProps) {
    return (
        <Wrapper>
            <DrawerActions
                font="regular"
                style={{ marginTop: height * 0.03 }}
                content="내 기록"
                color={Colors.drawerBlue}
                textColor="white"
            />
            <TextContainer>
                <Text font="regular">
                    오늘 <Text color={Colors.drawerBlue}>2km 목표</Text>를
                    달성하셨습니다.
                </Text>
            </TextContainer>

            <View style={{ alignItems: 'center', width: '100%' }}>
                <DataGraph width={300} />
            </View>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    flex: 1,
})

const TextContainer = styled.View({
    marginTop: height * 0.02,
    paddingHorizontal: width * 0.05,
})
