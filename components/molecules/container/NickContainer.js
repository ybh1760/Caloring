import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default props => {
    return (
        <View style={styles.nickContainer}>
            <Text>밍구</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nickContainer: {
        width: width * 0.2,
        height: 24,
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
