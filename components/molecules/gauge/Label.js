import React from 'react'
import { View, StyleSheet } from 'react-native'

import Text from '../../atoms/text/Text'
import Grey from '../../atoms/Icon/Grey'
import Red from '../../atoms/Icon/Red'
import Colors from '../../../constants/Colors'

export default props => {
    const { image, title, score } = props

    return (
        <View style={styles.container}>
            {image === 'grey' ? (
                <Grey width={20} height={20} />
            ) : (
                <Red width={20} height={20} />
            )}
            <Text
                size={13}
                font="regular"
                color={Colors.grey}
                style={styles.content}
            >
                {title} {score}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 20,
        marginBottom: 10,
        alignItems: 'center',
    },
    content: { marginLeft: 5 },
})
