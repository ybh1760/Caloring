import React from 'react'
import { StyleSheet } from 'react-native'

import RoundAttack from '../../../atoms/roundEdge/RoundEdge'
import Colors from '../../../../constants/Colors'
import Text from '../../../atoms/text/Text'
import Rem from '../../../../constants/Rem'
import FontSize from '../../../../constants/FontSize'

interface AttckButtonTextProps {
    onPress?: any
}

export default function AttackButton(props: AttckButtonTextProps) {
    return (
        <RoundAttack style={styles.position} onPress={props.onPress}>
            <Text size={Rem() * 1.2} align="center" color="white" font="medium">
                ATTACK
            </Text>
        </RoundAttack>
    )
}

const styles = StyleSheet.create({
    position: {
        width: '100%',
        marginTop: Rem() * 0.36,
        alignSelf: 'center',
        backgroundColor: Colors.attackRed,
    },
})
