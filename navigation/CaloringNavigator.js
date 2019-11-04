import React from 'react'
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    StatusBar,
    Dimensions,
} from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'

import HomePage from '../components/pages/HomePage'
import RunningPage from '../components/pages/RunningPage'
import StartPage from '../components/pages/StartPage'
import FriendsPage from '../components/pages/FriendsPage'
import Colors from '../constants/Colors'
import DataFetchCheck from '../components/pages/DataFetchCheck'
import UserInfo from '../components/organisms/drawer/UserInfo'
import UserItem from '../components/organisms/drawer/UserItem'
import UserData from '../components/organisms/drawer/UserData'

const { height } = Dimensions.get('window')

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Colors.headerBack,
    },
}

const CharactorNavigator = createStackNavigator(
    {
        Home: HomePage,
        Run: RunningPage,
        Friends: FriendsPage,
    },
    {
        defaultNavigationOptions: defaultNavOptions,
    }
)

const DrawerNavigator = createDrawerNavigator(
    {
        Charactor: CharactorNavigator,
    },
    {
        contentOptions: { activeTintColor: 'red' },
        contentComponent: props => {
            return (
                <View
                    style={{
                        height: height,
                        paddingTop: StatusBar.currentHeight,
                    }}
                >
                    <View
                        style={{
                            height: height * 0.3,
                            backgroundColor: Colors.drawerBlue,
                        }}
                    >
                        <UserInfo />
                    </View>
                    <View
                        style={{
                            height: height * 0.3,
                        }}
                    >
                        <UserItem />
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            width: '90%',
                            alignSelf: 'center',
                        }}
                    />
                    <View style={{ height: height * 0.4 }}>
                        <UserData />
                    </View>
                </View>
            )
        },
    }
)

const MainNavigator = createSwitchNavigator({
    Drawer: DrawerNavigator,
    Start: StartPage,
    Test: DataFetchCheck,
})

export default createAppContainer(MainNavigator)
