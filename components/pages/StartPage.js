import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useDispatch } from 'react-redux'

import * as userActions from '../../store/actions/userData'

export default function StartPage(props) {
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    title="user1"
                    onPress={() => {
                        dispatch(userActions.setUser1Data)
                        props.navigation.navigate('Drawer')
                    }}
                />
                <Button
                    title="user2"
                    onPress={() => {
                        dispatch(userActions.setUser2Data)
                        props.navigation.navigate('Drawer')
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})
