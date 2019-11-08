import React, { useEffect } from 'react'
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native'
import Colors from '../../constants/Colors'

const { width, height } = Dimensions.get('window')

export default props => {
    const func = async () => {
        await props.startAsync()
        props.onFinished()
    }
    useEffect(() => {
        func()
    }, [])

    return (
        <View style={styles.screen}>
            <View style={styles.charatorContainer}>
                <Image
                    source={
                        (src = require('../../assets/drawerImg/drawer.png'))
                    }
                    style={styles.charator}
                />
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 18,
                        marginTop: 15,
                        color: 'white',
                    }}
                >
                    Loading...
                </Text>
            </View>
            <Image
                source={
                    (src = require('../../assets/backgroundImg/loadBottom.png'))
                }
                style={styles.bottom}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.drawerBlue,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    charatorContainer: {
        marginBottom: height * 0.13,
    },
    charator: {
        width: width * 0.25,
        height: height * 0.18,
    },
    bottom: {
        width: width,
        height: height * 0.4,
    },
})
