import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

export default props => {
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
