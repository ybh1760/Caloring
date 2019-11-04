import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import Colors from '../../../constants/Colors'
import DrawerActions from '../../molecules/button/DrawerActions'
import Item from '../../atoms/item/Item'

const { height } = Dimensions.get('window')

export default props => {
    return (
        <View style={styles.userItem}>
            <DrawerActions
                style={{ marginTop: 20 }}
                content="내 아이템"
                color={Colors.drawerBlue}
                textColor="white"
            />
            <View style={styles.items}>
                <Item />
                <Item />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userItem: { flex: 1 },
    items: {
        marginTop: height * 0.03,
        flexDirection: 'row',
        height: '75%',
        width: '100%',
    },
})
