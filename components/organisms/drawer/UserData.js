import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'

import Colors from '../../../constants/Colors'
import DrawerActions from '../../molecules/button/DrawerActions'
import Text from '../../atoms/text/Text'

const { width, height } = Dimensions.get('window')

export default props => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerActions
                font="regular"
                style={{ marginTop: 20 }}
                content="내 기록"
                color={Colors.drawerBlue}
                textColor="white"
            />
            <View style={styles.textContainer}>
                <Text font="regular">
                    오늘 <Text color={Colors.drawerBlue}>2km 목표</Text>를
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
