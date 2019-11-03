import React, { useState, useEffect } from 'react'
import MapView from 'react-native-maps'

export default function MapSnapshot(props) {
    const location = useSelector(state =>
        state.location.location.find(pl => pl.id === 'p1')
    )

    const initialRegion = {
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    return (
        <MapView
            region={initialRegion}
            style={styles.map}
            showsUserLocation
            minZoomLevel={17}
        />
    )
}
