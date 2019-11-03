import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
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
    }
)

const MainNavigator = createSwitchNavigator({
    Drawer: DrawerNavigator,
    Start: StartPage,
})

export default createAppContainer(MainNavigator)
