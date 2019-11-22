import React from 'react'
import { Dimensions, View } from 'react-native'
import styled from 'styled-components/native'

import Colors from '../../../constants/Colors'
import StatusBar from '../gauge/StatusBar'
import Attack from '../../atoms/button/AttackIcon'
import AttackButton from '../button/circle/Attack'
import Text from '../../atoms/text/Text'
import Rem from '../../../constants/Rem'
import FontSize from '../../../constants/FontSize'

const { width: ScreenWidth } = Dimensions.get('window')

interface FriendListItemProps {}

export default function FriendListItem(props: FriendListItemProps) {
    return (
        <FriendCard>
            <Character>
                <View
                    style={{
                        width: '85%',
                        height: '85%',
                        borderWidth: 1.5,
                        borderColor: 'white',
                        borderRadius: 8,
                    }}
                ></View>
            </Character>
            <FriendData>
                <View style={{ marginBottom: 5 }}>
                    <Text size={FontSize(1)}>최윤영</Text>
                </View>
                <StatusBar
                    style={{
                        height: Rem(),
                        width: '80%',
                        padding: Rem() * 0.1,
                    }}
                    gaugeStyle={{ height: Rem() * 0.8 }}
                    status="fat"
                    gauge={100}
                    color={Colors.fatGauge}
                />
            </FriendData>
            <AttackButton onPress={() => {}} dim={ScreenWidth * 0.15}>
                <Attack width={31} height={31} />
            </AttackButton>
        </FriendCard>
    )
}

const FriendCard = styled.View({
    height: ScreenWidth * 0.2,
    width: ScreenWidth * 0.95,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
})

const Character = styled.View({
    width: ScreenWidth * 0.17,
    height: ScreenWidth * 0.17,
    borderRadius: 10,
    backgroundColor: Colors.friendColor,
    justifyContent: 'center',
    alignItems: 'center',
})

const FriendData = styled.View({
    width: '60%',
})

// const AttackButton = styled.TouchableOpacity({
//     width: ScreenWidth * 0.15,
//     height: ScreenWidth * 0.15,
//     borderRadius: ScreenWidth * 0.15 * 0.5,
//     backgroundColor: Colors.yellow,
//     justifyContent: 'center',
//     alignItems: 'center',
// })
