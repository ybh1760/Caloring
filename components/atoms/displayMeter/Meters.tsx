import React from 'react'
import { Text } from 'react-native'

export default (meter: number) =>
    meter > 100 ? (
        <Text>00.{Math.floor(meter / 10)}</Text>
    ) : (
        <Text>00.0{Math.floor(meter / 10)}</Text>
    )
