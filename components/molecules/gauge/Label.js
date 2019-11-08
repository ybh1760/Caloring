import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import RegularText from '../../atoms/text/regular/Text'
import Grey from '../../atoms/Icon/Grey'
import Red from '../../atoms/Icon/Red'

export default props => {
    const { image, title, score } = props

    return (
        <View style={styles.container}>
            {image === 'grey' ? (
                <Grey width={20} height={20} />
            ) : (
                <Red width={20} height={20} />
            )}
            <RegularText style={styles.content}>
                {title} {score}
            </RegularText>
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
