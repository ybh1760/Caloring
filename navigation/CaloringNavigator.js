import React from 'react'
import { Dimensions } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import MainPage from '../components/pages/MainPage'
import RunningPage from '../components/pages/RunningPage'
import StartPage from '../components/pages/StartPage'
import FriendsPage from '../components/pages/FriendsPage'
import Colors from '../constants/Colors'
import DrawerPage from '../components/pages/DrawerPage'
import ResultPage from '../components/pages/ResultPage'

const { width } = Dimensions.get('window')

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Colors.headerBack,
    },
}

const CharactorNavigator = createStackNavigator(
    {
        Main: MainPage,
        Run: RunningPage,
        Friends: FriendsPage,
        Result: ResultPage,
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
        drawerWidth: width * 0.85,
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
