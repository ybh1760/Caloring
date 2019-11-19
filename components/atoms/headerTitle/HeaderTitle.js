import React from 'react'
import { View } from 'react-native'

import Text from '../text/Text'
import Colors from '../../../constants/Colors'

export default props => (
    <View
        style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Text size={18} color={Colors.grey} font="bold">
            {props.title}
        </Text>
    </View>
)
