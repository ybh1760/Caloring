import React from 'react'
import { View } from 'react-native'

import BoldText from '../text/bold/Text'

export default props => (
    <View
        style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <BoldText style={{ fontSize: 18, color: 'white' }}>
            {props.title}
        </BoldText>
    </View>
)
