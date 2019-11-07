import React from 'react'
import { Text } from 'react-native'

export const minTimer = sec =>
    sec / 60 > 9 ? (
        <Text>{`${Math.floor(sec / 60)}`}</Text>
    ) : (
        <Text>{`0${Math.floor(sec / 60)}`}</Text>
    )

export const secTimer = sec =>
    sec % 60 > 9 ? (
        <Text>{` : ${sec % 60}`}</Text>
    ) : (
        <Text>{` : 0${sec % 60}`}</Text>
    )
