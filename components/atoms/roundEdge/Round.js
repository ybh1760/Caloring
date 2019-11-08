import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import RegularText from '../text/regular/Text'

export default props => {
    return (
        <TouchableOpacity
            style={{ ...props.style, ...styles.round }}
            onPress={props.onPress}
        >
            <RegularText style={{ color: props.color }}>
                {props.content}
            </RegularText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    round: {
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
