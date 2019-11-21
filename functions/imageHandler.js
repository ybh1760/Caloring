import React, { useEffect } from 'react'
import { View, Image, StyleSheet, PixelRatio, Dimensions } from 'react-native'

const { width: ScreenWidth } = Dimensions.get('window')

export default fat => {
    if (fat === 1) {
        return (
            <Image
                source={(src = require(`../assets/CharactorImg/main1.png`))}
                style={styles.charactor1}
            />
        )
    } else if (fat === 2) {
        return (
            <Image
                source={(src = require('../assets/CharactorImg/main2.png'))}
                style={styles.charactor2}
            />
        )
    } else if (fat === 3) {
        return (
            <Image
                source={(src = require('../assets/CharactorImg/main3.png'))}
                style={styles.charactor3}
            />
        )
    } else {
        return (
            <Image
                source={(src = require('../assets/CharactorImg/main1.png'))}
                style={styles.charactor1}
            />
        )
    }
}

const styles = StyleSheet.create({
    charactor1: {
        width: ScreenWidth > 360 ? 105 * 1.2 : 105,
        height: ScreenWidth > 360 ? 131 * 1.2 : 131,
    },
    charactor2: {
        width: ScreenWidth > 360 ? 105 * 1.2 : 105,
        height: ScreenWidth > 360 ? 96 * 1.2 : 96,
    },
    charactor3: {
        width: ScreenWidth > 360 ? 105 * 1.2 : 105,
        height: ScreenWidth > 360 ? 88 * 1.2 : 88,
    },
})
