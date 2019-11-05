import React from 'react'
import {
    StyleSheet,
    Alert,
    ImageBackground,
    Dimensions,
    Image,
    View,
    Text,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import HeaderButton from '../molecules/button/HeaderButton'
import Bottom from '../organisms/main/MainBottom'

const { width, height } = Dimensions.get('window')

export default function MainPage(props) {
    const dist = useSelector(state => state.distance.distance[0])

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={
                    (src = require('../../assets/backgroundImg/mainBackground.png'))
                }
                style={styles.container}
            >
                <View style={styles.message}>
                    <Text>{dist}</Text>
                </View>
                <View style={styles.charactor}>
                    <Image
                        source={
                            (src = require('../../assets/CharactorImg/penguin_1.png'))
                        }
                        style={styles.image}
                    />
                </View>
                <Bottom navigation={props.navigation} />
            </ImageBackground>
        </View>
    )
}

MainPage.navigationOptions = navData => {
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
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    charactor: {
        width: 150,
        height: 159,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    message: {
        width: 130,
        height: 70,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 3,
        marginBottom: 15,
    },
})
