import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// import Grey from '../../atoms/Icon/grey.svg'
import Grey from '../../atoms/Icon/Grey'
// import Red from '../../atoms/Icon/red.svg'
import Red from '../../atoms/Icon/Red'

export default props => {
    const { image, title, score } = props

    return (
        <View style={styles.container}>
            {image === 'grey' ? <Grey /> : <Red />}
            <Text style={styles.content}>
                {title} {score}
            </Text>
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
