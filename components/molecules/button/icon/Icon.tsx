import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

interface IconButtonProps {
    onPress: any
    children?: any
}

export default function Icon(props: IconButtonProps) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                justifyContent: 'center',
                marginLeft: 20,
            }}
        >
            {props.children}
        </TouchableOpacity>
    )
}
