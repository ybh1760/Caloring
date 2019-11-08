import React from 'react'
import {
    StyleSheet,
    Alert,
    ImageBackground,
    Dimensions,
    View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import HeaderButton from '../molecules/button/HeaderButton'
import Bottom from '../organisms/main/MainBottom'
import imageHandler from '../../functions/imageHandler'
import HeaderTitle from '../atoms/headerTitle/HeaderTitle'
import styled from 'styled-components'

const { width, height } = Dimensions.get('window')

export default function MainPage(props) {
    const userData = useSelector(state => state.userData.userData)

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={
                    (src = require('../../assets/backgroundImg/mainBackground.png'))
                }
                style={styles.container}
            >
                <View
                    style={{
                        marginBottom: 60,
                    }}
                >
                    <View style={styles.message}></View>
                    <View
                        style={{
                            width: 0,
                            height: 0,
                            position: 'absolute',
                            right: 30,
                            bottom: -30,
                            borderTopColor: 'white',
                            borderRightColor: 'transparent',
                            borderLeftColor: 'transparent',
                            borderTopWidth: 30,
                            borderRightWidth: 20,
                            borderLeftWidth: 20,
                        }}
                    />
                </View>
                {imageHandler(userData.fat)}
                <Bottom navigation={props.navigation} />
            </ImageBackground>
        </View>
    )
}

MainPage.navigationOptions = navData => {
    return {
        headerTitle: <HeaderTitle title="MY ROOM" />,
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="menu"
                    iconName="md-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer()
                    }}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="notice"
                    iconName="md-notifications"
                    onPress={() => {
                        Alert.alert('알림', '아직 구현하지 않았습니다.', [
                            { text: 'Okay' },
                        ])
                    }}
                />
                <Item
                    title="friends"
                    iconName="md-people"
                    onPress={() => {
                        navData.navigation.navigate('Friends')
                    }}
                />
            </HeaderButtons>
        ),
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    message: {
        width: 150,
        height: 80,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
    },
})
