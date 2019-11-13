import React from 'react'
import { View, StyleSheet, Dimensions, Alert } from 'react-native'
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
import attackHandler from '../../../functions/attackHandler'
import Text from '../../atoms/text/Text'

const { width, height } = Dimensions.get('window')

export default props => {
    const userData = useSelector(state => state.userData.userData)

    return (
        <View style={styles.bottom}>
            <NickContainer nick={userData.name} />
            <View style={styles.bottomContent}>
                <AttackContainer height={height * 0.32}>
                    <Attack
                        onPress={() => {
                            // attackHandler()
                            Alert.alert('ATTACK', '공격 되었습니다.', [
                                { text: '확인' },
                            ])
                        }}
                    >
                        <AttackIcon width={35} height={35} />
                    </Attack>
                </AttackContainer>
                <AttackTextButton
                    onPress={() => {
                        // attackHandler()
                        Alert.alert('ATTACK', '공격 되었습니다.', [
                            { text: '확인' },
                        ])
                    }}
                />
                <Text size={18} font="black">
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
