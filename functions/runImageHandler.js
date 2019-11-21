import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default motion => {
    if (motion) {
        return (
            <Image
                style={styles.image}
                source={
                    (src = require('../assets/CharactorImg/runningMotion_1.png'))
                }
            />
        )
    } else {
        return (
            <Image
                style={styles.image}
                source={
                    (src = require('../assets/CharactorImg/runningMotion_2.png'))
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    image: { width: 105, height: 138 },
})
