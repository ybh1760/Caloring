import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'

import StatusBar from '../../molecules/gauge/StatusBar'
import Colors from '../../../constants/Colors'
import DrawerActions from '../../molecules/button/DrawerActions'

const { width, height } = Dimensions.get('window')

export default props => {
    const userData = useSelector(state => state.userData.userData)

    return (
        <View style={styles.userInfoContainer}>
            <View style={styles.userInfo}>
                <Image
                    style={styles.image}
                    source={
                        (src = require('../../../assets/drawerImg/drawer.png'))
                    }
                />
                <View style={styles.userInfoDetail}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                            marginBottom: 8,
                        }}
                    >
                        {userData.name} 님
                    </Text>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                        }}
                    >
                        Level 10
                    </Text>
                    <View style={styles.statusContainer}>
                        <StatusBar color={Colors.fatGauge} gauge="10%" />
                    </View>
                </View>
            </View>
            <DrawerActions content="프로필" color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    userInfoContainer: { flex: 1 },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '75%',
        justifyContent: 'space-around',
    },
    image: { width: 60, height: 80 },
    userInfoDetail: { width: '55%' },
    statusContainer: {
        justifyContent: 'flex-end',
        height: '20%',
    },
})
