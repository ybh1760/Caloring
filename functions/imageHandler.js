import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default fat => {
    if (fat === 1) {
        return (
            <View style={styles.charactor1}>
                <Image
                    source={(src = require('../assets/CharactorImg/main1.png'))}
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
        width: 150,
        height: 165,
    },
    charactor2: {
        width: 170,
        height: 180,
    },
    charactor3: {
        width: 200,
        height: 200,
    },
    image: {
        width: '100%',
        height: '100%',
    },
})
