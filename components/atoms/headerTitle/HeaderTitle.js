import React from 'react'
import { View } from 'react-native'

import Text from '../text/Text'

export default props => (
    <View
        style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Text size={18} color="white" font="bold">
            {props.title}
        </Text>
    </View>
)
