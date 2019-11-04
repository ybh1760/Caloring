import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

import Colors from '../../../constants/Colors'
import DrawerActions from '../../molecules/button/DrawerActions'

const { width, height } = Dimensions.get('window')

export default props => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerActions
                style={{ marginTop: 20 }}
                content="내 기록"
                color={Colors.drawerBlue}
                textColor="white"
            />
            <View style={styles.textContainer}>
                <Text>
                    오늘{' '}
                    <Text style={{ color: Colors.drawerBlue }}>2km 목표</Text>를
                    달성하셨습니다.
                </Text>
            </View>
            <View style={styles.graphContainer}>
                <Image />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        marginTop: height * 0.02,
        paddingHorizontal: width * 0.05,
    },
    graphContainer: {
        height: '70%',
    },
})
