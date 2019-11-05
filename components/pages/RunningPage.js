import React from 'react'
import { StyleSheet, View, Image, ImageBackground } from 'react-native'
import RunBottom from '../organisms/Running/RunBottom'

export default function RunningPage(props) {
    return (
        <ImageBackground style={styles.imageBackground} source={{ uri: null }}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: null }} />
            </View>
            <RunBottom navigation={props.navigation} />
        </ImageBackground>
    )
}

RunningPage.navigationOptions = {
    headerTitle: '운동중',
}

const styles = StyleSheet.create({
    imageBackground: { flex: 1 },
    imageContainer: { width: '80%', height: '30%', alignSelf: 'center' },
    image: { width: '100%', height: '100%' },
})
