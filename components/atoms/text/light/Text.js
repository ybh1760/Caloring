import React from 'react'
import { Text, StyleSheet } from 'react-native'

import Colors from '../../../../constants/Colors'

export default props => {
    return (
        <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: Colors.grey,
        fontFamily: 'roboto-light',
    },
})
