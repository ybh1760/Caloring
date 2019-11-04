import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'

import AttackContainer from '../../molecules/container/AttackContainer'
import Attack from '../../molecules/button/circle/Attack'
import RunButton from '../../molecules/button/circle/Press'
import NickContainer from '../../molecules/container/NickContainer'
import AttackIcon from '../../atoms/button/attackIcon.svg'
import Status from '../../molecules/container/StatusContainer'
import AttackTextButton from '../../molecules/button/roundEdge/AttackButton'
import Colors from '../../../constants/Colors'

const { width, height } = Dimensions.get('window')

export default props => {
    return (
        <View style={styles.bottom}>
            <NickContainer />
            <View style={styles.bottomContent}>
                <AttackContainer height={height * 0.32}>
                    <Attack>
                        <AttackIcon width={35} height={35} fill="white" />
                    </Attack>
                </AttackContainer>
                <AttackTextButton />
                <Text style={{ fontSize: 18, marginBottom: 5 }}>Level 10</Text>
                <Status
                    image="grey"
                    title="칼로링포인트"
                    color={Colors.calGauge}
                />
                <Status image="red" title="지방지수" color={Colors.fatGauge} />
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
