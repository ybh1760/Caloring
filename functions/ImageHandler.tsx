import React from 'react'
import { Image, StyleSheet, Dimensions } from 'react-native'

const { width: ScreenWidth } = Dimensions.get('window')

export default function ImageHandler(props: any) {
    switch (props.fat) {
        case 1:
            return (
                <Image
                    source={require(`../assets/CharactorImg/characterVer1.png`)}
                    style={styles.charactor1}
                />
            )
        case 2:
            return (
                <Image
                    source={require(`../assets/CharactorImg/characterVer2.png`)}
                    style={styles.charactor2}
                />
            )
        case 3:
            return (
                <Image
                    source={require(`../assets/CharactorImg/characterVer3.png`)}
                    style={styles.charactor3}
                />
            )
        case 4:
            return (
                <Image
                    source={require(`../assets/CharactorImg/characterVer4.png`)}
                    style={styles.charactor4}
                />
            )
        case 5:
            return (
                <Image
                    source={require(`../assets/CharactorImg/characterVer5.png`)}
                    style={styles.charactor5}
                />
            )
        default:
            return (
                <Image
                    source={require(`../assets/CharactorImg/characterVer5.png`)}
                    style={styles.charactor5}
                />
            )
    }
}

const styles = StyleSheet.create({
    charactor1: {
        width: ScreenWidth > 360 ? 109 * 1.2 : 109,
        height: ScreenWidth > 360 ? 142 * 1.2 : 142,
    },
    charactor2: {
        width: ScreenWidth > 360 ? 105 * 1.2 : 105,
        height: ScreenWidth > 360 ? 131 * 1.2 : 131,
    },
    charactor3: {
        width: ScreenWidth > 360 ? 121 * 1.2 : 121,
        height: ScreenWidth > 360 ? 110 * 1.2 : 110,
    },
    charactor4: {
        width: ScreenWidth > 360 ? 125 * 1.2 : 125,
        height: ScreenWidth > 360 ? 105 * 1.2 : 105,
    },
    charactor5: {
        width: ScreenWidth > 360 ? 174 * 1.2 : 174,
        height: ScreenWidth > 360 ? 113 * 1.2 : 113,
    },
})
