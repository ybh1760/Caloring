import React from 'react'
import { Image, StyleSheet, Dimensions } from 'react-native'

const { width: ScreenWidth } = Dimensions.get('window')

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
    image: {
        width: ScreenWidth > 360 ? 105 : 105 * 0.8,
        height: ScreenWidth > 360 ? 138 : 138 * 0.8,
    },
})
