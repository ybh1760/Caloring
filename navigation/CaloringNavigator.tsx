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
import LogIn from '../components/pages/LogIn'

const { width, height: ScreenHeight } = Dimensions.get('window')

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Colors.headerBack,
        height: ScreenHeight <= 640 ? ScreenHeight * 0.08 : ScreenHeight * 0.07,
    },
}

const CharactorNavigator = createStackNavigator(
    {
        Main: MainPage,
        Friends: FriendsPage,
        Run: RunningPage,
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
    LogIn: LogIn,
    Start: StartPage,
})

export default createAppContainer(MainNavigator)
