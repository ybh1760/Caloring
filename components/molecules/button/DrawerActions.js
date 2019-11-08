import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import IconButton from '../../molecules/button/icon/Icon'
import Right from '../../atoms/button/Right'
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
                    paddingVertical: 3,
                }}
                color={props.textColor}
                onPress={props.onPress}
            />
            <IconButton onPress={props.onPress}>
                <Right width={18} height={18} fill={props.color} />
            </IconButton>
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
