import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

export default (props: any) => {
    return (
        <TouchableOpacity
            style={{ ...styles.round, width: props.width, ...props.style }}
            onPress={props.onPress}
        >
            {props.children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    round: {
        borderRadius: 10,
    },
})
