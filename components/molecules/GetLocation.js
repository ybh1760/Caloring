import React, { useState, useCallback, useEffect } from 'react'
import { View, Button, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import * as Location from 'expo-location'

import * as locationActions from '../../store/actions/location'

export default function GetLocation(props) {
    const [placeId, setPlaceId] = useState()
    const [location, setLocation] = useState()
    const dispatch = useDispatch()

    const getLocation = async () => {
        try {
            const result = await Location.getCurrentPositionAsync({
                timeout: 5000,
            })
            setLocation({
                lat: result.coords.latitude,
                lng: result.coords.longitude,
            })
        } catch (err) {
            console.log('Location Error')
            throw err
        }
    }

    useEffect(() => {
        if (location) {
            setPlaceId(new Date().toString())
            dispatch(locationActions.setLocation(placeId, location))
        }
    }, [location])

    getLocationHandler = async () => {
        await getLocation()
        props.navigation.navigate('Run')
    }

    return (
        <View style={{ ...props.style }}>
            <Button title="Run" color="yellow" onPress={getLocationHandler} />
        </View>
    )
}
