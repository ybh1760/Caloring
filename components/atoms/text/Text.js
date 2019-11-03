import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default props => {
    return <Text style={{ ...props.style }}>{props.children}</Text>
}
