import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = props => (
    <Svg viewBox="0 0 357 357" {...props}>
        <Path d="M25.5 357h102V0h-102v357zm204-357v357h102V0h-102z" />
    </Svg>
)

export default SvgComponent
