import React from 'react'
import { StyleSheet } from 'react-native'

import RoundAttack from '../../../atoms/roundEdge/RoundEdge'
import Colors from '../../../../constants/Colors'
import Text from '../../../atoms/text/Text'

export default props => {
    return (
        <RoundAttack width={64} style={styles.position} onPress={props.onPress}>
            <Text size={10} align="center" color={Colors.attackRed} font="bold">
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
        borderWidth: 1.5,
    },
})
