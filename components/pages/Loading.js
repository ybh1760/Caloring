import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

export default props => {
    const func = async () => {
        await props.startAsync()
        props.onFinished()
    }
    useEffect(() => {
        func()
    }, [])

    return <View style={{ flex: 1, backgroundColor: 'green' }} />
}
