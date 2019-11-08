import React from 'react'
import { View, StatusBar, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

import UserInfo from '../organisms/drawer/UserInfo'
import UserItem from '../organisms/drawer/UserItem'
import UserData from '../organisms/drawer/UserData'
import Colors from '../../constants/Colors'

export default props => {
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
                <UserInfo navigation={props.navigation} />
            </View>
            <View
                style={{
                    height: height * 0.3,
                }}
            >
                <UserItem navigation={props.navigation} />
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
                <UserData navigation={props.navigation} />
            </View>
        </View>
    )
}
