import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Text from '../text/Text'

interface RoundTextButtonProps {
    style?: object
    onPress: any
    color?: string
    size?: number
    font?: string
    content?: any
}

export default (props: RoundTextButtonProps) => {
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
