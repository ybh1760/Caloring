import React from 'react'
import { View, StyleSheet } from 'react-native'

import Label from '../gauge/Label'
import Status from '../gauge/StatusBar'

export default props => {
    const { image, title, color } = props
    return (
        <View style={styles.status}>
            <Label image={image} title={title} score={props.score} />
            <Status color={color} gauge={props.gauge} />
        </View>
    )
}

const styles = StyleSheet.create({
    status: { marginBottom: 10 },
})
