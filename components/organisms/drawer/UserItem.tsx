import React from 'react'
import { Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import Colors from '../../../constants/Colors'
import DrawerActions from '../../molecules/button/DrawerActions'
import Item from '../../atoms/item/Item'

const { height } = Dimensions.get('window')

interface UserItem {
    navigation: any
}

export default function UserItem(props: UserItem) {
    return (
        <Wrapper>
            <DrawerActions
                font="regular"
                style={{ marginTop: 20 }}
                content="내 아이템"
                color={Colors.drawerBlue}
                textColor="white"
            />
            <ItemContainer>
                <ScrollView horizontal>
                    <Items>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </Items>
                </ScrollView>
            </ItemContainer>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    height: height * 0.3,
})

const Items = styled.View({
    marginTop: height * 0.03,
    flexDirection: 'row',
    height: '75%',
    width: '100%',
})

const ItemContainer = styled.View({
    width: '100%',
})
