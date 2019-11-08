import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

export default props => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                marginLeft: 10,
            }}
        >
            {props.children}
        </TouchableOpacity>
    )
}
