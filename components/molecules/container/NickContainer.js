import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default props => {
    return (
        <View style={styles.nickContainer}>
            <Text style={{ textAlign: 'center' }}>밍구</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nickContainer: {
        width: width * 0.2,
        height: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 20,
        alignSelf: 'center',
    },
})
