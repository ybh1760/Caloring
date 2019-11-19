import React from 'react'
import { Dimensions, View } from 'react-native'
import styled from 'styled-components/native'

import Colors from '../../../constants/Colors'
import StatusBar from '../../molecules/gauge/StatusBar'
import Attack from '../../atoms/button/AttackIcon'
import Text from '../../atoms/text/Text'

const { width } = Dimensions.get('window')

export default props => {
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
                    <Text font="regular">최윤영</Text>
                </View>
                <StatusBar
                    style={{ height: 15, width: '80%' }}
                    gaugeStyle={{ height: 7 }}
                    status="fat"
                    gauge={100}
                    color={Colors.fatGauge}
                />
            </FriendData>
            <AttackButton>
                <Attack width={31} height={31} />
            </AttackButton>
        </FriendCard>
    )
}

const FriendCard = styled.View({
    height: width * 0.2,
    width: width * 0.95,
    flexDirection: 'row',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
})

const Character = styled.View({
    width: width * 0.17,
    height: width * 0.17,
    borderRadius: 10,
    backgroundColor: Colors.friendColor,
    justifyContent: 'center',
    alignItems: 'center',
})

const FriendData = styled.View({
    width: '60%',
})

const AttackButton = styled.TouchableOpacity({
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: width * 0.15 * 0.5,
    backgroundColor: Colors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
})
