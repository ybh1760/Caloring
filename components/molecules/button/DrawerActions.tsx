import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

import IconButton from './icon/Icon'
import Right from '../../atoms/button/DrawerRight'
import Round from '../../atoms/roundEdge/Round'

const { width } = Dimensions.get('window')

interface DrawerActionsProps {
    style?: object
    font?: string
    content?: string
    color?: string
    textColor?: string
    onPress?: any
}

export default function DrawerActions(props: DrawerActionsProps) {
    return (
        <View style={{ ...styles.actionContanier, ...props.style }}>
            <Round
                font={props.font}
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
