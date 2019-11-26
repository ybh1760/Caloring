import React from 'react'
import { Dimensions, Alert, Vibration } from 'react-native'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import AttackContainer from '../../molecules/container/AttackContainer'
import NickContainer from '../../molecules/container/NickContainer'
import AttackIcon from '../../atoms/button/AttackIcon'
import Status from '../../molecules/container/StatusContainer'
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
                <AttackContainer height={ScreenHeight * 0.35} onPress={attack}>
                    <AttackIcon width={Rem() * 4.3} height={Rem() * 4.3} />
                </AttackContainer>

                <Text
                    size={FontSize(2)}
                    font="medium"
                    style={{ marginBottom: Rem() * 0.9 }}
                >
                    Level 10
                </Text>
                <Status
                    image="grey"
                    title="칼로링 포인트"
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
                    dim={Rem() * 8.2}
                >
                    <Text size={FontSize(3)} font="bold">
                        RUN
                    </Text>
                </Run>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    width: '97%',
    height: ScreenHeight * 0.39,
    justifyContent: 'flex-end',
})

const Content = styled.View({
    backgroundColor: 'white',
    height: ScreenHeight * 0.35,
    paddingHorizontal: Rem() * 2.53,
    paddingTop: Rem() * 1.8,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 3,
})
