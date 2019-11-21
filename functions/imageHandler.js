import React from 'react'
import { View, Image, StyleSheet, PixelRatio, Dimensions } from 'react-native'

const { width: ScreenWidth } = Dimensions.get('window')

export default fat => {
    if (fat === 1) {
        return (
            <View style={styles.charactor1}>
                <Image
                    source={
                        (src = require(`../assets/CharactorImg/main${1}.png`))
                    }
                    style={styles.image}
                />
            </View>
        )
    } else if (fat === 2) {
        return (
            <View style={styles.charactor2}>
                <Image
                    source={(src = require('../assets/CharactorImg/main2.png'))}
                    style={styles.image}
                />
            </View>
        )
    } else if (fat === 3) {
        return (
            <View style={styles.charactor3}>
                <Image
                    source={(src = require('../assets/CharactorImg/main3.png'))}
                    style={styles.image}
                />
            </View>
        )
    } else {
        return (
            <View style={styles.charactor1}>
                <Image
                    source={(src = require('../assets/CharactorImg/main1.png'))}
                    style={styles.image}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    charactor1: {
        width: 105,
        height: 131,
    },
    charactor2: {
        width: 105,
        height: 96,
    },
    charactor3: {
        width: 105,
        height: 88,
    },
    image: {
        width: '100%',
        height: '100%',
    },
})
