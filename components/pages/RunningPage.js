import React from 'react'
import { StyleSheet, View, Image, ImageBackground } from 'react-native'
import RunBottom from '../organisms/Running/RunBottom'

export default function RunningPage(props) {
    return (
        <View style={styles.screen}>
            <ImageBackground
                style={styles.imageBackground}
                source={
                    (src = require('../../assets/backgroundImg/runBackground.png'))
                }
            >
                <View style={styles.content}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={
                                (src = require('../../assets/CharactorImg/pengRun.png'))
                            }
                        />
                    </View>

                    <RunBottom navigation={props.navigation} />
                </View>
            </ImageBackground>
        </View>
    )
}

RunningPage.navigationOptions = {
    headerTitle: '운동중',
}

const styles = StyleSheet.create({
    screen: { flex: 1 },
    imageBackground: { flex: 1 },
    content: {
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    imageContainer: { width: 120, height: 160 },
    image: { width: '100%', height: '100%' },
})

//410x780
