import React from 'react'
import { Text, StyleSheet } from 'react-native'

import RoundAttack from '../../../atoms/roundEdge/RoundEdge'
import Colors from '../../../../constants/Colors'

export default props => {
    return (
        <RoundAttack width={60} style={styles.position} onPress={() => {}}>
            <Text
                style={{
                    fontSize: 10,
                    textAlign: 'center',
                    color: Colors.attackRed,
                }}
            >
                ATTACK
            </Text>
        </RoundAttack>
    )
}

const styles = StyleSheet.create({
    position: {
        position: 'absolute',
        top: 40,
        right: 30,
    },
})
