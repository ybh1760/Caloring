import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import * as userDataActions from '../../store/actions/userData'

export default props => {
    const [isLoading, setIsLoading] = useState(false)
    const userData = useSelector(state => state.userData.userData)
    const dispatch = useDispatch()

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
            }}
        >
            <Text>{userData.id}</Text>
            <Text>{userData.name}</Text>
            <Text>{userData.goal}</Text>
            <Text>{userData.fat}</Text>
        </View>
    )
}
