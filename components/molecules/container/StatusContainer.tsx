import React from 'react'
import { View, StyleSheet } from 'react-native'

import Label from '../gauge/Label'
import StatusBar from '../gauge/StatusBar'

interface StatusProps {
    image: string
    title: string
    color: string
    score: number
    gauge: any
    status: string
}

export default function StatusContainer(props: StatusProps) {
    const { image, title, color } = props
    return (
        <View style={styles.status}>
            <Label image={image} title={title} score={props.score} />
            <StatusBar
                color={color}
                gauge={props.gauge}
                status={props.status}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    status: { marginBottom: 10 },
})
