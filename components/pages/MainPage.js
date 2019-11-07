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
    const userData = useSelector(state => state.userData.userData)

    const imgHandler = () => {
        if (userData.fat === 1) {
            return (
                <View style={styles.charactor1}>
                    <Image
                        source={
                            (src = require('../../assets/CharactorImg/main1.png'))
                        }
                        style={styles.image}
                    />
                </View>
            )
        } else if (userData.fat === 2) {
            return (
                <View style={styles.charactor2}>
                    <Image
                        source={
                            (src = require('../../assets/CharactorImg/main2.png'))
                        }
                        style={styles.image}
                    />
                </View>
            )
        } else {
            return (
                <View style={styles.charactor3}>
                    <Image
                        source={
                            (src = require('../../assets/CharactorImg/main3.png'))
                        }
                        style={styles.image}
                    />
                </View>
            )
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={
                    (src = require('../../assets/backgroundImg/mainBackground.png'))
                }
                style={styles.container}
            >
                <View style={styles.message}></View>
                {imgHandler()}
                <Bottom navigation={props.navigation} />
            </ImageBackground>
        </View>
    )
}

MainPage.navigationOptions = navData => {
    return {
        headerTitle: <Text>My Home</Text>,
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
    charactor1: {
        width: 150,
        height: 165,
    },
    charactor2: {
        width: 170,
        height: 180,
    },
    charactor3: {
        width: 200,
        height: 200,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    message: {
        width: 150,
        height: 80,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 3,
        marginBottom: 60,
    },
})
