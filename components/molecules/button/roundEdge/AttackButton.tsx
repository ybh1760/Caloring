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
        <RoundAttack
            width={Rem() * 4.5}
            style={styles.position}
            onPress={props.onPress}
        >
            <Text
                size={Rem() * 0.7}
                align="center"
                color={Colors.attackRed}
                font="bold"
            >
                ATTACK
            </Text>
        </RoundAttack>
    )
}

const styles = StyleSheet.create({
    position: {
        // position: 'absolute',
        // top: Rem() * 3,
        // right: 20 + Rem() * 0.75,
        marginTop: Rem() * 0.2,
        alignSelf: 'center',
        borderWidth: 1.5,
    },
})
