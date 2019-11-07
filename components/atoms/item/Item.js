import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

import Colors from '../../../constants/Colors'

const { width } = Dimensions.get('window')

export default props => {
    return <View style={styles.itemBackground}>{props.childeren}</View>
}

const styles = StyleSheet.create({
    itemBackground: {
        width: width * 0.3,
        height: width * 0.3,
        backgroundColor: Colors.itemBackColor,
        marginRight: width * 0.03,
        borderRadius: 10,
    },
})
