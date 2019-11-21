import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import Colors from '../../../constants/Colors'
import DrawerActions from '../../molecules/button/DrawerActions'
import Item from '../../atoms/item/Item'
import Rem from '../../../constants/Rem'

interface UserItem {
    navigation: any
    style: object
}

export default function UserItem(props: UserItem) {
    return (
        <Wrapper style={props.style}>
            <DrawerActions
                style={{ marginTop: Rem() * 1.8 }}
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
                    </Items>
                </ScrollView>
            </ItemContainer>
        </Wrapper>
    )
}

const Wrapper = styled.View({ flex: 1 })

const Items = styled.View({
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: Rem() * 1.5,
})

const ItemContainer = styled.View({
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
})
