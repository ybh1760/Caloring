import React from 'react'
import { View } from 'react-native'

import Text from '../text/Text'
import Colors from '../../../constants/Colors'

interface HeaderTitleProps {
    title: string
}

export default function HeaderTitle(props: HeaderTitleProps) {
    return (
        <View
            style={{
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text size={18} font="bold">
                {props.title}
            </Text>
        </View>
    )
}
