import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'

import StatusBar from '../../molecules/gauge/StatusBar'
import Colors from '../../../constants/Colors'
import DrawerActions from '../../molecules/button/DrawerActions'
import gaugeTrack from '../../../functions/gaugeTrack'
import Text from '../../atoms/text/Text'

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
                        font="regular"
                        color="white"
                        size={18}
                        style={{
                            marginBottom: 8,
                        }}
                    >
                        {userData.name} 님
                    </Text>
                    <Text font="regular" color="white" size={18}>
                        Level 10
                    </Text>
                    <View style={styles.statusContainer}>
                        <StatusBar
                            color={Colors.fatGauge}
                            gauge={gaugeTrack(userData.fat)}
                            status="fat"
                        />
                    </View>
                </View>
            </View>
            <DrawerActions
                font="regular"
                content="프로필"
                color="white"
                onPress={() => {
                    props.navigation.navigate('Main')
                }}
            />
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
