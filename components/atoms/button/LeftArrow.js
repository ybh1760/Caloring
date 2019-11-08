import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = props => (
    <Svg viewBox="0 0 408 408" {...props}>
        <Path d="M408 178.5H96.9L239.7 35.7 204 0 0 204l204 204 35.7-35.7L96.9 229.5H408v-51z" />
    </Svg>
)

export default SvgComponent
