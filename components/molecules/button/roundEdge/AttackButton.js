import React from 'react'
import { Text, StyleSheet } from 'react-native'

import RoundAttack from '../../../atoms/roundEdge/RoundEdge'
import Colors from '../../../../constants/Colors'
import BoldText from '../../../atoms/text/bold/Text'
export default props => {
    return (
        <RoundAttack width={64} style={styles.position} onPress={props.onPress}>
            <BoldText
                style={{
                    fontSize: 10,
                    textAlign: 'center',
                    color: Colors.attackRed,
                }}
            >
                ATTACK
            </BoldText>
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
