import React from 'react'
import {
    StyleSheet,
    Alert,
    ImageBackground,
    Dimensions,
    Image,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../molecules/button/HeaderButton'
import Bottom from '../organisms/main/Bottom'

const { width, height } = Dimensions.get('window')

export default function HomePage(props) {
    return (
        <ImageBackground
            source={
                (src = require('../../assets/backgroundImg/mainBackground.png'))
            }
            style={styles.container}
        >
            <Image
                source={
                    (src = require('../../assets/CharactorImg/penguin_1.png'))
                }
                style={styles.charactor}
            />
            <Bottom navigation={props.navigation} />
        </ImageBackground>
    )
}

HomePage.navigationOptions = navData => {
    return {
        headerTitle: 'MY ROOM',
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
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    charactor: {
        width: '45%',
        height: height * 0.2,
    },
})
