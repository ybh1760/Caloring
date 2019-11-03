import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Grey from '../../atoms/Icon/grey.svg'
import Red from '../../atoms/Icon/red.svg'

export default props => {
    const { image, title } = props

    return (
        <View style={styles.container}>
            {image === 'grey' ? (
                <Grey width={20} height={20} />
            ) : (
                <Red width={20} height={20} />
            )}
            <Text style={styles.content}>{title} 000</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 20,
        marginBottom: 5,
        alignItems: 'center',
    },
    content: { fontSize: 13, marginLeft: 5 },
})
