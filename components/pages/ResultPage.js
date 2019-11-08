import React from 'react'
import {
    View,
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar,
} from 'react-native'
import { AuthSession } from 'expo'

const { width, height } = Dimensions.get('window')

export default function ResultPage(props) {
    return (
        <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
            <ImageBackground
                style={styles.imgBack}
                source={
                    (src = require('../../assets/backgroundImg/runBackground.png'))
                }
            >
                <View style={styles.resultContainer}></View>
            </ImageBackground>
        </View>
    )
}

ResultPage.navigationOptions = navData => {
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({
    imgBack: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultContainer: {
        width: width * 0.95,
        height: height * 0.98,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 2,
    },
})
