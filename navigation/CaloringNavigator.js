import React from 'react'
import { Dimensions } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import HomePage from '../components/pages/MainPage'
import RunningPage from '../components/pages/RunningPage'
import StartPage from '../components/pages/StartPage'
import FriendsPage from '../components/pages/FriendsPage'
import Colors from '../constants/Colors'
import DrawerPage from '../components/pages/DrawerPage'

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
            return <DrawerPage navigation={props.navigation} />
        },
    }
)

const MainNavigator = createSwitchNavigator({
    Drawer: DrawerNavigator,
    Start: StartPage,
})

export default createAppContainer(MainNavigator)
