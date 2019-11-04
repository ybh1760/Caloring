import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Round from '../../../components/atoms/roundEdge/Round'

const { width } = Dimensions.get('window')

export default props => {
    return (
        <View style={{ ...styles.actionContanier, ...props.style }}>
            <Round
                content={props.content}
                style={{
                    backgroundColor: props.color,
                    width: width * 0.2,
                }}
                color={props.textColor}
            />
            <Ionicons name="md-arrow-dropright" color={props.color} size={30} />
        </View>
    )
}

const styles = StyleSheet.create({
    actionContanier: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: width * 0.05,
    },
})
