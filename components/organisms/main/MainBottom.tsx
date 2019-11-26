import React from 'react'
import { Dimensions, Alert, Vibration } from 'react-native'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import AttackContainer from '../../molecules/container/AttackContainer'
import Attack from '../../molecules/button/circle/Attack'
import RunButton from '../../molecules/button/circle/Press'
import NickContainer from '../../molecules/container/NickContainer'
import AttackIcon from '../../atoms/button/AttackIcon'
import Status from '../../molecules/container/StatusContainer'
import AttackTextButton from '../../molecules/button/roundEdge/AttackButton'
import Colors from '../../../constants/Colors'
import gaugeTracker from '../../../functions/gaugeTrack'
import caloringTracker from '../../../functions/caloringTracker'
import attackHandler from '../../../functions/attackHandler'
import Text from '../../atoms/text/Text'
import FontSize from '../../../constants/FontSize'
import Rem from '../../../constants/Rem'
import Run from '../../molecules/button/gradient/LinearGradient'

const { width, height: ScreenHeight } = Dimensions.get('window')

interface MainBottomProps {
    navigation: any
}

export default function MainBottom(props: MainBottomProps) {
    const userData = useSelector((state: any) => state.userData.userData)

    const attack = () => {
        props.navigation.navigate('Friends')
    }

    return (
        <Wrapper>
            <NickContainer nick={userData.name} />
            <Content>
                <AttackContainer height={ScreenHeight * 0.32} onPress={attack}>
                    <AttackIcon width={31} height={31} />
                </AttackContainer>

                <Text
                    size={FontSize(3)}
                    font="medium"
                    style={{ marginBottom: ScreenHeight * 0.01 }}
                >
                    Level 10
                </Text>
                <Status
                    image="grey"
                    title="칼로링포인트"
                    color={Colors.calGauge}
                    score={userData.exercising}
                    status="Caloring"
                    gauge={caloringTracker(userData.exercising)}
                />
                <Status
                    image="red"
                    title="지방지수"
                    color={Colors.fatGauge}
                    score={userData.fat}
                    status="fat"
                    gauge={gaugeTracker(userData.fat)}
                />
                <Run
                    colors={Colors.gradient.run}
                    style={{ alignSelf: 'center', elevation: 5 }}
                    onPress={() => {
                        props.navigation.navigate('Run')
                    }}
                    dim={Rem() * 6}
                >
                    <Text size={FontSize(2)} font="black">
                        RUN
                    </Text>
                </Run>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    width: '95%',
    height: ScreenHeight * 0.39,
    justifyContent: 'flex-end',
})

const Content = styled.View({
    backgroundColor: 'white',
    height: ScreenHeight * 0.32,
    paddingHorizontal: Rem() * 1.8,
    paddingTop: Rem() * 1.2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 3,
})
