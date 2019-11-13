import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Text from '../text/Text'

export default props => {
    return (
        <TouchableOpacity
            style={{ ...props.style, ...styles.round }}
            onPress={props.onPress}
        >
            <Text color={props.color} size={props.size} font={props.font}>
                {props.content}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    round: {
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
