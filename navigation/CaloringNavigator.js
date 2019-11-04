import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'

import HomePage from '../components/pages/HomePage'
import RunningPage from '../components/pages/RunningPage'
import StartPage from '../components/pages/StartPage'
import FriendsPage from '../components/pages/FriendsPage'
import Colors from '../constants/Colors'

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
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Ionicons
                    name={'md-list'}
                    size={23}
                    color={drawerConfig.tintColor}
                />
            ),
        },
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
                <View style={{ flex: 1 }}>
                    <SafeAreaView style={{ flex: 1, paddingTop: 25 }}>
                        <View
                            style={{
                                width: '100%',
                                height: '30%',
                                backgroundColor: Colors.drawerBlue,
                            }}
                        ></View>
                        <DrawerItems {...props} />
                    </SafeAreaView>
                </View>
            )
        },
    }
)

const MainNavigator = createSwitchNavigator({
    Drawer: DrawerNavigator,
    Start: StartPage,
})

export default createAppContainer(MainNavigator)
