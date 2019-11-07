import React from 'react'
import { View, StyleSheet, Dimensions, Text, Alert } from 'react-native'
import { useSelector } from 'react-redux'

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

const { width, height } = Dimensions.get('window')

export default props => {
    const userData = useSelector(state => state.userData.userData)

    const attackHandler = async () => {
        try {
            const response = await fetch(
                `http://15.164.129.166:8080/user/${userData.id}/attack`,
                {
                    method: 'PUT',
                }
            )
            if (!response.ok) {
                throw new Error('attack이 안됨')
            }
        } catch (err) {
            throw new Error('attack request error')
        }
    }

    return (
        <View style={styles.bottom}>
            <NickContainer nick={userData.name} />
            <View style={styles.bottomContent}>
                <AttackContainer height={height * 0.32}>
                    <Attack
                        onPress={() => {
                            attackHandler()
                            Alert.alert(
                                'ATTACK',
                                '공격 되었습니다.'[{ text: '확인' }]
                            )
                        }}
                    >
                        <AttackIcon width={31} height={31} fill="white" />
                    </Attack>
                </AttackContainer>
                <AttackTextButton />
                <Text
                    style={{
                        fontSize: 18,
                        marginBottom: 5,
                        fontFamily: 'roboto-black',
                    }}
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
                    gauge={gaugeTracker(userData.fat)}
                    status="fat"
                />
                <RunButton
                    title="Run"
                    style={{ alignSelf: 'center', elevation: 5 }}
                    onPress={() => {
                        props.navigation.navigate('Run')
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottom: {
        width: '90%',
        height: height * 0.39,
        justifyContent: 'flex-end',
    },
    bottomContent: {
        backgroundColor: 'white',
        height: height * 0.32,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        elevation: 3,
        paddingTop: 20,
        paddingHorizontal: 30,
    },
})
