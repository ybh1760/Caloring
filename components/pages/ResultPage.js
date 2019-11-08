import React from 'react'
import {
    View,
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar,
} from 'react-native'

import MainResult from '../organisms/result/MainResult'

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
                <MainResult navigation={props.navigation} />
            </ImageBackground>
        </View>
    )
}

ResultPage.navigationOptions = {
    headerShown: false,
}

const styles = StyleSheet.create({
    imgBack: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
